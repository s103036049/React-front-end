const initialState = {
    cart:[],
}

export const getTotal = (cart) =>{
    return(
        cart.reduce((amount,item) =>parseInt(item.price)+amount,0)
    )
}

export function cartReducer(state = initialState, action){
    switch(action.type){
        case 'Add_Item_To_Cart':
            return {
              ...state,
                cart:[...state.cart,action.item]
            }
        case 'Remove_Item_From_Cart':
            const index = state.cart.findIndex((cartItem) =>
                cartItem.id ===action.id)
            let newCart = [...state.cart]
            if (index >= 0){
                newCart.splice(index,1)
            }else {
                console.warn('cart not delete')
            }
            return {
              ...state,
                cart:newCart
            }
            case 'CLEAR_CART':
                return { ...state, cart: [] }; // 清空購物車
        default:
            return state
    }
}

export default cartReducer

  
