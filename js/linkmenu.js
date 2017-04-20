$(document).ready(function(){

  $("#PAGE_LINK h4").click(function () { 
    if($(this).hasClass("openlink")){ 
      $(this).removeClass("openlink");
    }else{
      $(this).addClass("openlink"); 
    }
      $("#PAGE_LINK h4 + ul").slideToggle(); 
  });

  $("#CATEGORIES_LINK h4").click(function () { 
    $(this).toggleClass("openlink"); 
      $("#CATEGORIES_LINK h4 + ul").slideToggle(); 
  });
});
