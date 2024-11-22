import React, { createContext, useContext, useEffect, useState } from 'react'

export const TheamContext = createContext()

export const useTheme= () => {
    return useContext(TheamContext);
}

const TheamProvider = (props) =>{

    const [isDarktheam, setDarkTheam] = useState(false);

    const toggelTheme = () => {
        setDarkTheam(prev => !prev)
    }

    const theme = isDarktheam ? 'dark' : 'light';

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [isDarktheam])
    

    return(
        <TheamContext.Provider value={[isDarktheam, toggelTheme]}>
          {props.children}
    </TheamContext.Provider>
    );
}


export default TheamProvider;