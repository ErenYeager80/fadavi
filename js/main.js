// const orderPlus = document.getElementById('order_plus');
// const orderMinus = document.getElementById('order_minus');
// const orderChange = document.getElementById('order_change');
// let i = 0;



// orderPlus.addEventListener('click',() => {
//     orderChange.value = ++i;
// })

// orderMinus.addEventListener('click', () =>  {
//     orderChange.value = --i;
// })

const btnNavbar = document.getElementById('btnNavbar');
const sidebar = document.getElementById('sidebar');
btnNavbar.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-show');
    sidebar.classList.toggle('sidebar-hide');
})

// const address = '/fadavi';
