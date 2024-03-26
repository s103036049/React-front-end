export function addtocart(product){
    return{
        type: "Add_Item_To_Cart",
        item:{
            id:product.id,
            price:product.price,
            title:product.title,
        }
    }
}

export function removefromcart(id){
    return{
        type: "Remove_Item_From_Cart",
        id:id,
    }
}

  