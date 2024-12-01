import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee';
import Preview from '../Components/Home/Preview';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import ForgotPassword from '../Components/Auth/ForgetPassword';
import Private from './Private';
import MyProfile from '../Pages/MyProfile';
import UpdateProfile from '../Pages/UpdateProfile';

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
                element:
                    <Private>
                        <AddCoffee />
                    </Private>
            },
            {
                path: '/update-coffee/:id',
                element:
                    <Private>
                        <UpdateCoffee />
                    </Private>,
                loader: ({ params }) => fetch(`https://espresso-emporium-server-theta.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/preview/:id',
                element:
                    <Private>
                        <Preview />
                    </Private>,
                loader: ({ params }) => fetch(`https://espresso-emporium-server-theta.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />,
                children: [
                    {
                        path: '/login/ForgetPassword',
                        element: <ForgotPassword />
                    }
                ]
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/my-profile',
                element:
                    <Private>
                        <MyProfile />
                    </Private>
            },
            {
                path: '/update-Profile',
                element:
                    <Private>
                        <UpdateProfile />
                    </Private>
            },
        ],
    },
]);

export default router;
