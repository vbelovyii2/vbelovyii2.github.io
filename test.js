let deadline = '2019-08-01';

let timeNow =(Date.parse(deadline) - Date.parse(new Date()))-10800000;



function showTimer(){
    timeNow -= 1000;
    let sec = (timeNow/1000)%60;
    let min =Math.floor((timeNow/1000/60)%60);
    let hour = Math.floor(timeNow/1000/60/60)%24;
    let day = Math.floor(timeNow/1000/60/60/24);
    document.querySelector('.day').innerHTML = day + ' ';
    document.querySelector('.hour').innerHTML = hour;
    document.querySelector('.min').innerHTML = min;
      if (min<10) {
        document.querySelector('.min').innerHTML = '0'+min; 
    }
    document.querySelector('.sec').innerHTML = sec; 
    if (sec<10) {
        document.querySelector('.sec').innerHTML = '0'+sec; 
    }
}

let myInterval = setInterval(showTimer,1000);
if (timeNow<=0) {
    clearInterval(myInterval);
    document.querySelector('p').textContent = "Зарпалата сегодня!";
}
///////////////////////////////// function for animation

  window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

/////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////Canvas

function initate(){
    let canvas = document.getElementById('myCanvas');
    if (canvas) {
        canvas.width = 1000;
        canvas.height = 500;
        let ctx = canvas.getContext('2d');
        ////////////////////////////////////////////////////////write code this!!! 
            let  snow = [ ];
        function animate(){
            window.requestAnimFrame(animate);
            createSnow();
            updateSnow();
            returnSnow();
            showSnow();
        }
       
        window.requestAnimFrame(animate);
        
        function createSnow(){
            if (snow.length<400){
                let colors = ['white','blue','green','yellow','red','pink','orange'];
                snow.push({
                    x: Math.random()*canvas.width,
                    y: 0,
                    radius: 2+Math.random()*3,
                    speed: 2+Math.random()*4,
                    color: colors[Math.floor(Math.random()* (6 - 0 + 1) + 0)],
                });
            }
        }
        
        function updateSnow(){
            for(key in snow){
                let result = snow[key];
                result.y += result.speed;
            }
        }
        
        function returnSnow(){
            for(key in snow){
                let result = snow[key];
                if (result.y>canvas.height){
                    result.y = 0;
                }
            }
        }
        
        function showSnow(){
            ctx.fillStyle = "black";
            ctx.fillRect(0,0,canvas.width,canvas.height);
            for(key in snow){
                let result = snow[key];
                ctx.beginPath();
                ctx.arc(result.x,result.y,result.radius,0,Math.PI*2);
                ctx.closePath();
                ctx.fillStyle = result.color;
                ctx.fill();
            }
        }
    ///////////////////////////////////////// draw ran man    
        let tick =0;
        let z = 0;
    let man = new Image();
    man.src = 'scottpilgrim_multiple.png';
        let x = 0;
       function  animates(){
           //window.requestAnimFrame(animates);   
           ctx.fillRect(0,0,canvas.width,canvas.height);
           let frame  = (tick % 8);
           let x = frame*108;
            ctx.drawImage(man,x,0,108,135,z,0,108,135) ;   
           tick++;
           z+=15;
           if (z>=canvas.width+108){
               z=-108
           }
       }
   
        
//setInterval(animates,100);      
     /////////////////////////////////// don't touch brackets  
    }
}
////////////////////////////////////////////////////////////end canvas

/////////////////////////////////////////////////////////////calculator begin



///////////////////////////////////////////////////////////////////calc end




 window.addEventListener('load',initate) 


































