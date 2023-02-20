
// Função Header Para mudar a cor do cabeçalho
function scroll() {
    const header = document.querySelector('.header');
    if(this.scrollY >= 50) {
        header.classList.add('mudar-cor');
    } else {
        header.classList.remove('mudar-cor');
    }
}
window.addEventListener('scroll', scroll)



function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Faqs esconder 
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}








const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_titulo , .home_descricao , .img_1 , .img_2 , .home_button`,{interval: 100})
sr.reveal(`.footer_container , .marca_titulo , .marca_descricao , .marca_footer , .marca_icon , .servico_card , .servico_texto , .partilha_box-imagem , .partilha_box-partilha , .section__title-center , .partilha_box , .aplicacao_texto` ,{interval: 100})
sr.reveal(`.app_cards , .questions__group`,{origin: 'left'})
sr.reveal(`.app_imagem , .questions__group2 `,{origin: 'right'})