import { createContext } from "react";

export const ContentContext = createContext()
const ContentProvider = ({ children }) => {
    return (
        <ContentContext.Provider>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentProvider;