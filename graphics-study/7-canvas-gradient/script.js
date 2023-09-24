const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

//ctx.fillStyle = 'rgb(0,0,0)';
//ctx.fillRect(0,0,width,height);

let i = 1;
let j = 1;
let colour1 = '#ffffff';
let colour2 = '#cdcdcd';
let colour3 = '#a6a6a6';

function loop() {

    if(i%23 === 0){
        if(j === 1){
            document.body.style.backgroundImage = `linear-gradient(to right top, ${colour1}, ${colour2}, ${colour3})`;
            j++;
        } else if(j === 2){
            document.body.style.backgroundImage = `linear-gradient(to right top, ${colour2}, ${colour1}, ${colour2})`;
            j++;
        } else if(j === 3){
            document.body.style.backgroundImage = `linear-gradient(to right top, ${colour3}, ${colour2}, ${colour1})`;
            j=1;
        }

        console.log(colour3, colour2, colour1);
    }
    
    requestAnimationFrame(loop);
    i++;
}

loop();