const btnShow = document.querySelector('#btn-show');
const navMin = document.querySelector('.nav-min');
const navLink = document.querySelector('.nav-link');

console.log(btnShow);

btnShow.addEventListener('click', () =>{
    if(navMin.classList.contains('show')){
        navMin.classList.remove('show');
        btnShow.classList.replace('fa-times', 'fa-bars');
    }else{
        navMin.classList.add('show');
        btnShow.classList.replace('fa-bars', 'fa-times');
    }
});