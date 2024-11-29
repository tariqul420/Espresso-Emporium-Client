import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: '/add-coffee',
                element: <AddCoffee />
            },
        ],
    },
]);

export default router;
