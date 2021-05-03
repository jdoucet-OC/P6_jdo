
(function() {
    modal_ready = 0;
    document.addEventListener('modal', function (e) {
    modal_ready += 1;
    if (modal_ready===28){
        var list_items = document.querySelectorAll('.product-list__item');
        [].forEach.call(list_items, function(item) {
            modalize(item);
        });
    }
}, false);


})();

function modalize(item){
    var modal = item.querySelector(".modal");
    var btn = item.querySelector(".product");
    var span = item.querySelector(".close");

    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

}