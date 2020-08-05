/*navigation bar*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/* MAP*/
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
/*SHOP*/
$( document ).ready(function () {
    $('.product-click').click(e => {
        $('.product-view').fadeOut('800');
        var $productview = $(this).parent().next();
        $($productview).fadeIn('1000');
        $($productview).css("display", "flex");
        e.stopPropagation();
    });
    $('.product-view').click(e => {
        e.stopPropagation();
    });
    $(document).click(() => {
        $('.product-view').fadeOut('800');
    });

    $('.close-btn').click(() => {
        $('.product-view').fadeOut('800');
    });
});

