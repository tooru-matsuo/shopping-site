$(window).load(function(){
  $("#PICT_LIST a img").click(function(){
    var img_src = $(this).attr("src");
    $("#MAIN_VIEW>img").attr("src", img_src);
    return false;
  });
});
