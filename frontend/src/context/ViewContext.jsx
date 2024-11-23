import React, { createContext, useContext, useState } from 'react'

export const ViewContext = createContext();

export const useActive = () => {
  return useContext(ViewContext)
  // returns active, changeTodo
}

const ViewProvider = ( props ) => {
const [active, setactive] = useState(false);  // 0 for light 1 for dark


  const changeTodo = () => {
    setactive(prev => !prev);
  }

  return (

    <ViewContext.Provider value={[active, changeTodo]}>
        {props.children}
    </ViewContext.Provider>

  )

}
 
export default ViewProvider;