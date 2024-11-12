import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorPage from './done/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        exact: true,
        element: <App />,
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
