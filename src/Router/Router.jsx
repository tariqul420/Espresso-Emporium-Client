import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee';
import Preview from '../Components/Home/Preview';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://espresso-emporium-server-theta.vercel.app/coffees')
            },
            {
                path: '/add-coffee',
                element: <AddCoffee />
            },
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`https://espresso-emporium-server-theta.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/preview/:id',
                element: <Preview />,
                loader: ({ params }) => fetch(`https://espresso-emporium-server-theta.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ],
    },
]);

export default router;
