
var stack=1;
var orderOfColours =[];

//EventClick Green Button 
$("#green").click(function(){
    HighlightCell("red");
});

//EventClick Red Button 
$("#red").click(function(){
    if(orderOfColours.length==0){
        orderOfColours.push(1);
    }
});

function ReplaySequence(){
    while(orderOfColours.length>0){

    }
}

function HighlightCell(color){
    $("#green").addClass("highlighted");
    $("#green").fadeOut(100).fadeIn(100);
}
