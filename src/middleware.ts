import { jwtVerify } from 'jose'
import { type NextRequest, NextResponse } from 'next/server'

async function verifyJWT(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch (error) {
    return null
  }
}

export default async function middleware(req: NextRequest) {
  const protectedRoutes = {
    dashboard: '/dashboard',
    workshop_dashboard: '/workshop',
  }
  const authRoute = ['/client']

  const path = req.nextUrl.pathname
  const isProtectedRoute = Object.values(protectedRoutes).some(route =>
    path.startsWith(route)
  )
  const isAuthRoute = authRoute.some(route => path.startsWith(route))

  if (isProtectedRoute) {
    const token = req.cookies.get('pe_access_token')?.value

    if (token) {
      const tokenData = await verifyJWT(token)
      if (tokenData) {
        if (
          tokenData.sub?.includes('oficina.') &&
          path.startsWith('/dashboard')
        ) {
          const workshopUrl = new URL('/workshop', req.nextUrl)
          return NextResponse.redirect(workshopUrl)
        }
        return NextResponse.next()
      }
    }
    const loginUrl = new URL('/client/login', req.nextUrl)
    return NextResponse.redirect(loginUrl)
  }

  if (isAuthRoute) {
    const token = req.cookies.get('pe_access_token')?.value

    if (token) {
      const tokenData = await verifyJWT(token)
      if (tokenData) {
        if (tokenData.sub?.includes('oficina.')) {
          const workshopUrl = new URL('/workshop', req.nextUrl)
          return NextResponse.redirect(workshopUrl)
        }
        const dashboardUrl = new URL('/dashboard', req.nextUrl)
        return NextResponse.redirect(dashboardUrl)
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/client/:path*', '/workshop/:path*'],
}
