const btns = document.querySelectorAll('.btn')
const white = document.querySelector('.white')
const space = document.querySelector('.space')
const color = document.querySelector('#color')

const img = document.querySelector('#img')
const price = document.querySelector('[data-org]')
const org_price = 1999

space.onclick = () => {
    color.innerHTML = 'Space Gray'
    img.src = './img/mac-2.jpg';
    space.classList.add('active')
    white.classList.add('noactive')
}
white.onclick = () => {
    color.innerHTML = 'White'
    img.src = './img/mac-1.jpg'
    white.classList.remove('noactive')
    space.classList.remove('active')
}
btns.forEach(btn => {
    const addPrice = +btn.getAttribute('data-price')
    btn.onclick = () => {
        btns.forEach(btn => btn.classList.remove('btn_active'))
        btn.classList.add('btn_active')
        price.innerHTML = '$' + (org_price + addPrice);
        
    }
});