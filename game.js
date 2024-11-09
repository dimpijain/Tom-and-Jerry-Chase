let score=0;
let highScore=0;
let cross=true;
document.addEventListener('keyup', function(e) {
    console.log("key pressed is", e.key);
    if (e.key === ' ') {
        let goat = document.querySelector('.goat');
        goat.classList.add('animategoat');
        setTimeout(() => {
            goat.classList.remove('animategoat');
        }, 700);  // This should match the animation duration (600ms) + some buffer time.
    }
    if (e.key === 'ArrowUp') {
        let goat = document.querySelector('.goat');
        goat.classList.add('animategoat');
        setTimeout(() => {
            goat.classList.remove('animategoat');
        }, 700);  // This should match the animation duration (600ms) + some buffer time.
    }
    if (e.key === 'ArrowRight') {
       goat =document.querySelector('.goat');
       goatX=parseInt(window.getComputedStyle(goat, null).getPropertyValue('left').replace('px','')); 
       goat.style.left=(goatX + 112)+"px";
    }
    if (e.key === 'ArrowLeft') {
        goat =document.querySelector('.goat');
        goatX=parseInt(window.getComputedStyle(goat, null).getPropertyValue('left').replace('px','')); 
        goat.style.left=(goatX -112)+"px";
     }
});


setInterval(() => {
    goat=document.querySelector('.goat');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    py=parseInt(window.getComputedStyle(goat, null).getPropertyValue('bottom')); 
    px=parseInt(window.getComputedStyle(goat, null).getPropertyValue('left')); 
    ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left')); 
    oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom')); 
    offsetX= Math.abs(px-ox);
    offsetY= Math.abs(py-oy);
    if (offsetX<90 && offsetY< 50){
      
        gameOver.style.visibility='visible';
        
        goat.classList.remove('goat');
        obstacle.classList.remove('obstacleAni');
        obstacle.classList.remove('obstacle');
        
    }
    else if (offsetX<145 && cross){
        cross=false;
        score= score+ 1;
        updateScore(score);
        check();

        setTimeout(() => {
            cross=true;
        }, 1000);
    
        setTimeout(() => {
        aniDur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration')); 
        newDur=aniDur-0.1;
        obstacle.style.animationDuration= newDur+'s';

        }, 500);
    }
}, 100);

function updateScore(newScore) {
    document.querySelector('.scoreCont').textContent = `Score: ${newScore}`;
}
function check(){
    if (score>highScore){
        highScore=score;
        highscore(highScore);
       
    }
}
const highscore=(highScore)=>{
     document.querySelector('.highscore').textContent=`High Score: ${highScore}`;
}
    
    
