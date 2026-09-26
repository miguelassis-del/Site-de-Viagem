let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => movieItensOnClick('next')
btnBack.onclick = () => movieItensOnClick('back')


function movieItensOnClick(type){
    let listItens = document.querySelectorAll('.list .list-item')
    let thumbtItens = document.querySelectorAll('.thumb .thumb-item')



    if(type === 'next'){
        list.appendChild(listItens [0])
        thumb.appendChild(thumbtItens [0])
        container.classList.add('next')
    }else {
        list.prepend(listItens [listItens.length -1])
        thumb.prepend(thumbtItens [listItens.length -1])
        container.classList.add('back')
    }
    
    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);

}




