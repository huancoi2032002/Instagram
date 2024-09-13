import { useState, useEffect } from 'react';

const useSessionStorage = <T,>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = sessionStorage.getItem(key);
            console.log("Initial storedValue:", item); // Debugging
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            console.log("Updating sessionStorage:", storedValue); // Debugging
            sessionStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
};

export default useSessionStorage;
