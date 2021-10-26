export const saveCart = (cartList) => {
  localStorage.setItem('cart', cartList);
};

export const getCart = () => {
  localStorage.getItem('cart');
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};
