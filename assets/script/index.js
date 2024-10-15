// const calculateTotalPrice = (quantity = 2, price = 15000000) => {
//   const totalCost = quantity * price;
//   const formatPrice = totalCost.toLocaleString('ru-RU');
//   alert(`Стоимость покупки: ${formatPrice} рублей`);
// }
// // Получаем элементы DOM после загрузки страницы
// document.addEventListener('DOMContentLoaded', () => {
//   calculateTotalPrice();
// });

const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  const totalCost = quantity * price;
  const formatPrice = totalCost.toLocaleString('ru-RU');

  const divPurchasePrice = document.getElementById('purchase-price');

  const newElement = document.createElement('p');
  newElement.textContent = `Стоимость покупки: ${formatPrice} рублей`;

  divPurchasePrice.append(newElement);
}
document.addEventListener('DOMContentLoaded', () => {
  calculateTotalPrice();
});