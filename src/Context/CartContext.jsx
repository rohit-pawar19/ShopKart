import { createContext, useReducer } from "react";

export const CartContext = createContext()


const initilastate = {cart:[]}

export function CartReducer(state,action){
    switch(action.type){
        case "Add_To_Cart" :
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        case "Remove_From_Cart":
            return{
                ...state,
                cart:state.cart.filter((_,index)=>index != action.index)
            }
        case "Clear Cart":
            return initilastate;
        default:
            return state;
    }
}

export function CartProvider({children}){
    const [state ,dispatch] = useReducer(CartReducer,initilastate);

    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
