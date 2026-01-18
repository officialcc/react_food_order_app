import { act, createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        // TODO: Update the state to add a meal item
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                // ...state.items[existingCartItemIndex],
                ...existingItem,
                // quantity: state.items[existingCartItemIndex].quantity + 1
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        // TODO: Update the state to remove a meal item
    }

    return state;
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] });

    return (
        <CartContext.Provider>{children}</CartContext.Provider>
    )
}

export default CartContext;