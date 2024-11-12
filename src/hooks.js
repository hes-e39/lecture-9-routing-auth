import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from './done/Context';

export const useCurrentUser = () => {
    const { user } = useContext(AppContext);
    return user;
};

export const useUrlStateParam = (key, defaultValue) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get(key) ?? defaultValue);

    useEffect(() => {
        searchParams.set(key, value);
        navigate({
            ...location,
            search: searchParams.toString(),
        });
    }, [value]);

    return [value, setValue];
};

