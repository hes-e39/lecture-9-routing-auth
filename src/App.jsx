import { useContext } from 'react';
import AppProvider, { AppContext } from './done/Context';
import { SOME_SECRET } from './done/constants';

const SuperSecret = () => {
    return <div>MY SECRET: {SOME_SECRET}</div>;
};

const Secured = ({ children, fallback }) => {
    const { user } = useContext(AppContext);

    if (!user) return fallback;

    return children;
};

const App = () => {
    return (
        <Secured fallback={<div>Not logged in</div>}>
            <SuperSecret />
        </Secured>
    );
};

const Wrap = () => {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    );
};

export default Wrap;
