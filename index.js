$(document).ready(function(){
   $(".button").click(function(){

    $(this).addClass('active').siblings().removeClass('active')

    var filter = $(this).attr('data-filter')

    if(filter=="all")
    {
        $(".image1").show(400);

    }
    else
    {
        $(".image1").not("."+filter).hide(200);
        $(".image1").filter("." + filter).show(400);
    }

   });
});