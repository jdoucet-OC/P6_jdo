(function() {
    var carousels = document.querySelectorAll('.js-product-carousel');


    [].forEach.call(carousels, function(carousel) {
        carouselize(carousel);
    });

})();

function carouselize(carousel) {

    var productList = carousel.querySelector('.js-product-list');
    var productListWidth = 2205;
    var productListSteps = 0;
    var products = carousel.querySelectorAll('.product-list__item');
    var productAmount = 7;
    var productAmountVisible = Math.round(window.innerWidth/315);
    var productMaxStep = productAmount-productAmountVisible;
    var carouselPrev = carousel.querySelector('.js-carousel-prev');
    var carouselNext = carousel.querySelector('.js-carousel-next');
    window.addEventListener('resize', function(){
        productAmountVisible = Math.round(window.innerWidth/315);
        productMaxStep = productAmount-productAmountVisible;
        if (productListSteps>productMaxStep){
            productListSteps=productMaxStep;
        }
    });

    carouselNext.onclick = function() {
        productListSteps++;
        if (productListSteps>productMaxStep){
            productListSteps=productMaxStep;
        }
        productList.className="product-list js-product-list step"+productListSteps;
    }
    carouselPrev.onclick = function() {

        productListSteps--;
        if (productListSteps<0){
            productListSteps=0;
        }
        productList.className="product-list js-product-list step"+productListSteps;
    }
}
