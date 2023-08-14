export const calculateTotalProducts = (cartItem) => {
  return cartItem.reduce((total, item) => total + item.quantity, 0);
};
