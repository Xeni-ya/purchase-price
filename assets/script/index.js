const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  return quantity * price;
}
calculateTotalPrice(2, 57000000);
calculateTotalPrice();
alert('Стоимость покупки: ${calculateTotalPrice} рублей');