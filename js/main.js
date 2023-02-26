const orderPlus = document.getElementById('order_plus');
const orderMinus = document.getElementById('order_minus');
const orderChange = document.getElementById('order_change');
let i = 0;



orderPlus.addEventListener('click',() => {
    orderChange.value = ++i;
})

orderMinus.addEventListener('click', () =>  {
    orderChange.value = --i;
})