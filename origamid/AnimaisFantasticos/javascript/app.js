const tabMenu = document.querySelectorAll('.js-tabMenu li')
const tabContet = document.querySelectorAll('.js-tabContent section')
tabContet[0].classList.add('ativo')

function activeTab(index){
    tabContet.forEach((section) => {
        section.classList.remove('ativo')
    })
    tabContet[index].classList.add('ativo')

}

tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
        activeTab(index) 
    })
})

//percorrendo um array like e utilizando innerHtml
// tabContet.forEach((item) => {
//     console.log(item.innerHTML);
    
// })