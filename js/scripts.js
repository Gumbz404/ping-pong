var Number;
$(document).ready(function(){
  $("#fm").submit(function(event){
    Number=parseInt($("#Input").val());
    $(".li").text('');
    for(var index=1;index<=Number;index+=1){
      if(index%15==0){
        $(".li").append("<li>pingpong</li>");
      }
      else if(index%5==0){
        $(".li").append("<li>pong</li>");
      }
      else if(index%3==0){
        $(".li").append("<li>ping</li>");
      }
      else {
        $(".li").append("<li>  "+index+"</li>");
      }

  }
  $("#Input").val('')
  event.preventDefault();
  }
 );
}
);
