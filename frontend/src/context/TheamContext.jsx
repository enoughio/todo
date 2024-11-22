import React, { createContext, useContext, useState } from 'react'

export const TheamContext = createContext()

export const useTheme= () => {
    return useContext(TheamContext);
}

const TheamProvider = (props) =>{

    const [isDarktheam, setDarkTheam] = useState(false);

    const toggelTheme = () => {
        setDarkTheam(prev => !prev)
    }


    return(

        <TheamContext.Provider value={[isDarktheam, toggelTheme]}>
          {props.children}
    </TheamContext.Provider>
    );
}


export default TheamProvider;