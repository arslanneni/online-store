
export const setProducts = (products) => {
   
    return {
        key: "SET_PRODUCTS",
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        key: "SELECTED_PRODUCT",
        payload: product
    }
}

