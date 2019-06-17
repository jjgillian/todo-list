//check off specific Todos by chicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    

});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
     $(this).parent().fadeOut(500, function(){
         $(this).remove();
     }); 
     event.stopPropagation();

})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grapping new todo text from input
        todoText = $(this).val();
        $(this).val("");
        //creating a new li and add to ul
        $("ul").append("<li><span><i class= 'fa fa-trash-alt'></i></span>" + todoText + "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});