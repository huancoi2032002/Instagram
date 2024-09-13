// ContextProvider.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface SessionStorageContextType {
    selectedFiles: string[];
    setSelectedFiles: React.Dispatch<React.SetStateAction<string[]>>;
}

const SessionStorageContext = createContext<SessionStorageContextType | undefined>(undefined);

export const useSessionStorageContext = () => {
    const context = useContext(SessionStorageContext);
    if (!context) {
        throw new Error("useSessionStorageContext must be used within a SessionStorageProvider");
    }
    return context;
};
interface SessionStorageProviderProps {
    children: React.ReactNode;
}
export const SessionStorageProvider: React.FC<SessionStorageProviderProps> = ({ children }) => {
    const [selectedFiles, setSelectedFiles] = useState<string[]>(() => {
        // Load initial state from sessionStorage
        const storedFiles = sessionStorage.getItem("selectedFiles");
        return storedFiles ? JSON.parse(storedFiles) : [];
    });

    // Save to sessionStorage whenever selectedFiles changes
    useEffect(() => {
        sessionStorage.setItem("selectedFiles", JSON.stringify(selectedFiles));
    }, [selectedFiles]);

    return (
        <SessionStorageContext.Provider value={{ selectedFiles, setSelectedFiles }}>
            {children}
        </SessionStorageContext.Provider>
    );
};
