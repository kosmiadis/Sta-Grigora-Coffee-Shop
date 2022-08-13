const data = [
    {coffeeName: "Espresso Freddo Micorfarm", price: '2.20', imcSRC: 'images/coffees/EspressoFreddoMicrofarm.png'},
    {coffeeName: "Espressone Praline Microfarm", price: '3.30', imcSRC: 'images/coffees/EspressonePralineMicrofarm.png'},
    {coffeeName: "Espresso Tonic Microfarm", price: '2.80', imcSRC: 'images/coffees/EspressoTonicMicrofarm.png'},
    {coffeeName: "Freddo Cappuccino με φυτική κρέμα", price: '2.40', imcSRC: 'images/coffees/FreddoCappuccinomeFutikiKremaMicrofarm.png'},
    {coffeeName: "Iced Latte Microfarm", price: '2.70', imcSRC: 'images/coffees/IcedLatteMicrofarm.png'},
    {coffeeName: "Iced Spanish Latte Microfarm", price: '2.90', imcSRC: 'images/coffees/IcedSpanishLatteMicrofarm.png'}
]

const swiperContainer = document.querySelector('.container')
const addSwiperBtn = document.querySelector('#addSwiper')

const swiperGenerator = () => {

    const createProducts = (data) => {
        let swiper = document.createElement('div')
        swiper.setAttribute('class', 'swiper')

        let swiperWrapper = document.createElement('div')
        swiperWrapper.setAttribute('class', 'swiper-wrapper')

        let swiperPagination = document.createElement('div')
        swiperPagination.setAttribute('class', 'swiper-pagination')

        let swiperBtnPrev = document.createElement('div')
        swiperBtnPrev.setAttribute('class', 'swiper-button-prev')

        let swiperBtnNext = document.createElement('div')
        swiperBtnNext.setAttribute('class' ,'swiper-button-next')
        

        let swiperSlider
        let content
        let productImg
        let productDescr
        let productPrice

        for (const product of data) {
            console.log(product)
            console.log(product.coffeeName)
            
            swiperSlider = document.createElement('div')
            swiperSlider.setAttribute('class', 'swiper-slide')

            content = document.createElement('div')
            content.setAttribute('class', 'content')
            
            productImg = document.createElement('img')
            productImg.src = product.imcSRC

            productDescr = document.createElement('p')
            productDescr.setAttribute('class', 'description')
            productDescr.textContent = product.coffeeName

            productPrice = document.createElement('p')
            productPrice.setAttribute('class', 'price')
            productPrice.textContent = product.price + '€'

            content.appendChild(productImg)
            content.appendChild(productDescr)
            content.appendChild(productPrice)
            
            swiperSlider.appendChild(content)
        }

        swiperContainer.appendChild(swiper)
        swiper.appendChild(swiperWrapper)
        swiper.appendChild(swiperPagination)
        swiper.appendChild(swiperBtnPrev)
        swiper.appendChild(swiperBtnNext)
    }
    return {createProducts}
}

const coffeesSwiper = swiperGenerator();

addSwiperBtn.addEventListener('click', e => {
    coffeesSwiper.createProducts(data)
})