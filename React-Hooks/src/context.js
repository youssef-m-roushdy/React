import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);

// Create custome hook to solve the problem that user might not be defined or provided to the context
// to skip errors and put question mark to check if user is defined every time we use the context
export const useUserContext = () => {
    const user = useContext(DashboardContext);
    if (user === undefined) {
        throw new Error("useUserContext must be used within a DashboardContext.Provider");
    }
    return user;
}