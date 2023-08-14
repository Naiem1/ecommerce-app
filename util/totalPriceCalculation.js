export const calculateTotalPrice = (cartItem) => {
  const totalPrice = cartItem.reduce((total, item) => {
    total = total + item.price * item.quantity;
    return total;
  }, 0);

  return totalPrice;
};

// const calculateTotalPrice = () => {
  //   return cartState.item.reduce((total, item) => total + item.price * item.quantity, 0);
  // };
