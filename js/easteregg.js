      
var x = document.getElementById("myAudio"); 
function playAudio() { 
    x.play();
}
var i = document.getElementById("iphone");
function playAudio2(){
    i.play();
}

function carloscall()
{
    playAudio2();
    var callan = document.getElementById("callanim");
        if(callan){
            if(callan.className=='hidden'){
                callan.className = 'unhidden';
                clickedButton.value = 'hide';
            } else {
                callan.className = 'hidden';
                clickedButton.value = 'unhide';
            }
        }
}



function carlos() {
    playAudio();
    var carl = document.getElementById("animate");
    var cont = document.getElementById("container");
    
    
    var pos = 0;
    var id = setInterval(frame, 5);
    
    
    
    
    function frame(){
        if(pos == 350){   
        clearInterval(id);
        } else {
            pos++;
            carl.style.bot = pos + 'px';   
        }
        if(carl){
            if(carl.className=='hidden'){
                carl.className = 'unhidden';
                clickedButton.value = 'hide';
            } else {
                carl.className = 'hidden';
                clickedButton.value = 'unhide';
            }
        }
        if(cont){
            if(cont.className=='hidden'){
                cont.className = 'unhidden';
                clickedButton.value = 'hide';
            } else {
                cont.className = 'hidden';
                clickedButton.value = 'unhide';
            }
        }
    }
}