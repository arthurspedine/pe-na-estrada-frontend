import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/home'
import Error from './routes/error'
import Desenvolvedores from './routes/desenvolvedores'

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
                path: '/desenvolvedores',
                element: <Desenvolvedores />,
            },
        ],
    },
])

export default router
