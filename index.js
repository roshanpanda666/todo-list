$("#acceptbtn").click(function(){
    prompt=$("#prompt").val()

    $(".promptparrent").after($('<div>').addClass("newborn").html(prompt))

    
})