import React, { createContext, useState } from 'react'

export const ViewContext = createContext();

const ViewProvider = ( props ) => {
const [active, setactive] = useState(false);  // 0 for light 1 for dark

  const changeTodo = () => {
    setactive(prev => !prev);
  }

  return (

    <ViewContext.Provider value={[active, setactive, changeTodo]}>
        {props.children}
    </ViewContext.Provider>

  )

}
 
export default ViewProvider;