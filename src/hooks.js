import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from './done/Context';

export const useCurrentUser = () => {
    const { user } = useContext(AppContext);
    return user;
};

const useUrlStateParam = (name, initialValue) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get(name) ?? initialValue);

    useEffect(() => {
        searchParams.set(name, value);
        setSearchParams(searchParams);
    }, [value]);

    return [value, setValue];
};
