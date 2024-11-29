import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee';

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
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            }
        ],
    },
]);

export default router;
