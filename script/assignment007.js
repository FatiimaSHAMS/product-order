const $form = $('#form');
const $price_box = $('#price');
let $price = 20.00
const $total = $('#total');
const $color_box = $('#color');
const $show_btn = $(".show")
const $size_box = $('#sizes');
const $quantity_input = $('#quantity')
const $tile  = $('.tile');
const $gallery = $('.gallery a');

////////submit first disable//////
$("input[type='submit']").prop("disabled", true);



////////total amount/////////

$price_box.html("Price: $" + $price)

$quantity_input.ready(function() {
    let $quantity = $quantity_input.val(); 
    $total.html("Total: $" + $price * $quantity)

});

$quantity_input.on('input', function() {
    let $quantity = $(this).val(); 
    $total.html("Total: $" + $price * $quantity)
});

/////////////////////////check value/////////////
$("input[name='size']").on("click", check)

function check () {
    $size_box.html("Size: " + ($(this).attr("value")));
    $("input[type='submit']").attr("value", "Add To Cart");
    $("input[type='submit']").prop("disabled", false);
}



$(document).ready(function(){
    var Value = $('#default').attr("value");
    var target = $("." + Value);
    $color_box.html("Color: " + Value)
    $(".box").not(target).hide();
    $(target).show();

    $('.show').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $color_box.html("Color: " + inputValue)
        $(".box").not(targetBox).hide();
        $(targetBox).show();
        
    });
    
});




///////change image//////

$gallery.on('click', changeTile);

function changeTile(event){

    event.preventDefault();

    const src = $(this).attr('href');
    
    $tile.attr('src', src);
    $tile.attr('alt', src);

    $tile.attr({
        'src': src,
        'alt': src
    });
    
}





    

