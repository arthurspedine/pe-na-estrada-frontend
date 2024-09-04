import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/home'
import Error from './routes/error'
import AreaAssistente from './routes/area-assistente'
import SobreNos from './routes/sobrenos'
import AreaCliente from './routes/area-cliente'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/sobrenos',
                element: <SobreNos />,
            },
            {
                path: '/area_assistente',
                element: <AreaAssistente />,
            },
            {
                path: '/Cliente',
                element: <AreaCliente />,
            },
        ],
    },
])

export default router
