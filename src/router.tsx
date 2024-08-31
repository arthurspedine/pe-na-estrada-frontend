import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './routes/home'
import Error from './routes/error'
import Desenvolvedores from './routes/desenvolvedores'
import AreaAssistente from './routes/area-assistente'

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
            {
                path: '/area_assistente',
                element: <AreaAssistente />,
            },
        ],
    },
])

export default router
