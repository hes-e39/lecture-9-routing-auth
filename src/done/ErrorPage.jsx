import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return <div>Not Found</div>;
    }

    return <div>{error.error}</div>;
};

export default ErrorPage;
