// --------
// Задание - 1
var weeksAnswer = document.getElementById('weeksAnswer');
var weeksBtn = document.getElementById('weeksBtn');
var weeksInput;

function weeks() {
    weeksInput = document.getElementById('weeksInput').value;
    if (isNaN(weeksInput) || weeksInput == '' || weeksAnswer == 0) {
        weeksAnswer.innerHTML = 'Введите цифру';
        weeksAnswer.style.color = 'red';
    } else if (weeksInput == 1) {
        weeksAnswer.innerHTML = 'Monday';
        weeksAnswer.style.color = 'yellow';
    } else if(weeksInput == 2) {
        weeksAnswer.innerHTML = 'Tuesday';
        weeksAnswer.style.color = 'yellow';
    } else if (weeksInput == 3) {
        weeksAnswer.innerHTML = 'Wednesday';
        weeksAnswer.style.color = 'yellow';
    } else if (weeksInput == 4) {
        weeksAnswer.innerHTML = 'Thursday';
        weeksAnswer.style.color = 'yellow';
    } else if (weeksInput == 5) {
        weeksAnswer.innerHTML = 'Friday';
        weeksAnswer.style.color = '#6ab04c';
    } else if (weeksInput == 6 ) {
        weeksAnswer.innerHTML = 'Saturday';
        weeksAnswer.style.color = 'yellow';
    } else if (weeksInput == 7) {
        weeksAnswer.innerHTML = 'Sunday';
        weeksAnswer.style.color = 'yellow'
    } else{
        weeksAnswer.innerHTML = 'В неделе 7 дней';
        weeksAnswer.style.color = '#fff'
    }
}
// ------------
// ----END-----
// ------------


// ----Задание 2----
var numbersInput1, numbersInput2, numbersInput3;
var numbersBtn = document.getElementById('numbersBtn');
var numbersAnswer = document.getElementById('numbersAnswer');

function numbers() {
    numbersInput1 = document.getElementById('numbersInput1').value;
    numbersInput2 = document.getElementById('numbersInput2').value;
    numbersInput3 = document.getElementById('numbersInput3').value;
    
    if (numbersInput1 > numbersInput2 && numbersInput1 > numbersInput3) {
        numbersAnswer.innerHTML = numbersInput1;
        numbersAnswer.style.color = 'yellow'
    } else if (numbersInput2 > numbersInput1 && numbersInput2 > numbersInput3) {
        numbersAnswer.innerHTML = numbersInput2;
        numbersAnswer.style.color = 'yellow'
    } else if (numbersInput3 > numbersInput1 && numbersInput3 > numbersInput2) {
        numbersAnswer.innerHTML = numbersInput3;
        numbersAnswer.style.color = 'yellow'
    } else if (numbersInput1 == '' || numbersInput2 == '' || numbersInput3 == '') {
        numbersAnswer.innerHTML = 'Заполните все строчки';
        numbersAnswer.style.color = 'red';
    } else{
        numbersAnswer.innerHTML = 'Они равны';
        numbersAnswer.style.color = 'yellow'
    }
}
// ------------
// ----END-----
// ------------


// ----Задание 3----

// 
var oldsImg1 = document.getElementById('oldsImg1');
var oldsImg2 = document.getElementById('oldsImg2');
var oldsImg3 = document.getElementById('oldsImg3');
var oldsImg4 = document.getElementById('oldsImg4');
var oldsImg5 = document.getElementById('oldsImg5');
// 

var oldsInput;
var oldsBtn = document.getElementById('oldsBtn');
var oldsAnswer = document.getElementById('oldsAnswer');

function olds() {
    oldsInput = document.getElementById('oldsInput').value;
    
    if (oldsInput == '') {
        oldsAnswer.innerHTML = 'Введите число';
        oldsAnswer.style.color = 'red';
        
        oldsImg1.style.opacity = '0';
        oldsImg2.style.opacity = '0';
        oldsImg3.style.opacity = '0';
        oldsImg4.style.opacity = '0';
        oldsImg5.style.opacity = '0';
        
    } else if (oldsInput == 0 || oldsInput < 7 && oldsInput > 0) {
        oldsAnswer.innerHTML = 'Вам ещё рости и рости';
        oldsAnswer.style.color = 'yellow';
        oldsImg1.style.opacity = '1';
        
        // 
        oldsImg2.style.opacity = '0';
        oldsImg3.style.opacity = '0';
        oldsImg4.style.opacity = '0';
        oldsImg5.style.opacity = '0';
        // 
        
    } else if (oldsInput > 7 && oldsInput < 19) {
        oldsAnswer.innerHTML = 'Вам ещё учиться и учиться';
        oldsAnswer.style.color = 'yellow';
        oldsImg2.style.opacity = '1';
                
        // 
        oldsImg1.style.opacity = '0';
        oldsImg3.style.opacity = '0';
        oldsImg4.style.opacity = '0';
        oldsImg5.style.opacity = '0';
        // 
        
    } else if (oldsInput > 18 && oldsInput < 61) {
        oldsAnswer.innerHTML = 'Вам ещё работать и работать';
        oldsAnswer.style.color = 'yellow';
        oldsImg3.style.opacity = '1';
                
        // 
        oldsImg1.style.opacity = '0';
        oldsImg2.style.opacity = '0';
        oldsImg4.style.opacity = '0';
        oldsImg5.style.opacity = '0';
        // 
        
    } else if (oldsInput > 60 && oldsInput < 101) {
        oldsAnswer.innerHTML = 'Вам уже на пенсию надо';
        oldsAnswer.style.color = 'yellow';
        oldsImg4.style.opacity = '1';
                
        // 
        oldsImg1.style.opacity = '0';
        oldsImg2.style.opacity = '0';
        oldsImg3.style.opacity = '0';
        oldsImg5.style.opacity = '0';
        // 
        
    } else if (oldsInput > 100) {
        oldsAnswer.innerHTML = 'O_O';
        oldsAnswer.style.color = 'yellow';
        oldsImg5.style.opacity = '1'
                
        // 
        oldsImg1.style.opacity = '0';
        oldsImg2.style.opacity = '0';
        oldsImg3.style.opacity = '0';
        oldsImg4.style.opacity = '0';
        // 
        
    }
}
// -----------
// ----END----
// -----------


// ----Mini Game----
var random = Math.floor(Math.random() * 10 + 1);
console.log(random);

var gameInput;
var gameBtn = document.getElementById('gameBtn');
var gameAnswer = document.getElementById('gameAnswer');
var resetBtn = document.getElementById('resetBtn');


function game(){
    gameInput = document.getElementById('gameInput').value;
    if( gameInput == '' || gameInput > 10){
        gameAnswer.innerHTML = 'Введите число от 1 - 10';
        gameAnswer.style.color = 'red';
    }
    else if(gameInput > random){
        gameAnswer.innerHTML = 'Чуть меньше :)';
        gameAnswer.style.color = 'yellow';
    }
    else if(gameInput < random){
        gameAnswer.innerHTML = 'Чуть больше :)';
        gameAnswer.style.color = 'yellow';
    }
    else{
        gameAnswer.innerHTML = 'Поздравляем вы отгадали загаданное число'
        gameAnswer.style.color = '#6ab04c';
        gameBtn.style.display = 'none';
        resetBtn.style.display = 'inline-block';
    }
}
