import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logements from "./pages/Logements/Logements";
import NotFound from "./pages/NotFound/NotFound";
import App from "./App";

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'logements',
                    element: <Logements />,
                },
                {
                    path: '404',
                    element: <NotFound />,
                },
                {
                    path: '*',
                    element: <Navigate to="/404" />,
                }
            ],
        },
    ])

    return <RouterProvider router={router} />
}