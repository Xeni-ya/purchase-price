const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  const totalСost = quantity * price;
  const formatPrice = totalСost.toLocaleString('ru-RU');
  alert(`Стоимость покупки: ${formatPrice} рублей`);
}

document.addEventListener('DOMContentLoaded', () => {
  calculateTotalPrice();
});