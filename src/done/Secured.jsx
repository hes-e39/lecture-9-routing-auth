import { useNavigate } from 'react-router-dom';
import { SOME_SECRET } from './constants';
import { useCurrentUser } from './hooks';

const Secured = ({ children, redirect, fallback }) => {
    const user = useCurrentUser();
    const navigate = useNavigate();

    if (!user) {
        if (redirect) {
            navigate(redirect);
        } else {
            return fallback ?? null;
        }
    }

    return (
        <div>
            <span>{SOME_SECRET}</span>
            {children}
        </div>
    );
};

export default Secured;
