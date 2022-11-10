import react, { createContext, useContext, useState } from 'react';




const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false

}

export const ContextProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(initialState);
    const [activeMenu, setActiveMenu ]= useState(true);
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
    const [screenSize, setScreenSize] = useState(undefined);

    return (
        <StateContext.Provider value={{screenSize,setScreenSize,handleClick,activeMenu,setActiveMenu,isClicked,setIsClicked}}>
            {children}
        </StateContext.Provider >
    )
}

export const useStateContext = () => useContext(StateContext);
