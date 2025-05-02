
const getPhonesCart = () => {
    const getPhones = localStorage.getItem("cart");
    if(getPhones){
        return JSON.parse(getPhones)
    }

    else return [];
}

const addPhonesToCart = (productId) => {
    const cartPhones = getPhonesCart()
    const isProductExist = cartPhones.find(phone => phone.phoneID === productId);
    if(!isProductExist) {
        cartPhones.push({phoneID: productId,  qty: 1});
        localStorage.setItem("cart", JSON.stringify(cartPhones))
    }

    else return;
}

const removePhonesFromCart = (productId) => {
    const cartPhones = getPhonesCart();
    const existingPhones = cartPhones.filter(phone => phone.phoneID !== productId);
    localStorage.setItem("cart", JSON.stringify(existingPhones))
}


export { getPhonesCart, addPhonesToCart, removePhonesFromCart }