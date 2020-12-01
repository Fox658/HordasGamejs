//Crear el medio donde mostrar al enemigo
// el enemigo 
var number = 0;
var enemies = [];
var enemyAmount = 10;

function setbackgroundTest(){
    document.body.style.backgroundImage ="url('sprites_image/59467034-the-gray-and-white-squares-in-a-checkerboard-pattern-vector.jpg')";
    document.body.style.backgroundSize = " auto auto";
}
//Crear una function que cree el enemigo
function enemy(){
    var enemy = document.createElement('img');
    enemy.classList.add('enemy');
    var enemyId = 'enemy-'+ number;
    enemy.setAttribute('id', enemyId);
    enemies.push(enemyId);
    enemy.src = 'sprites_image/nbziabep83o31.png';
    enemy.style.position = 'relative';
    enemy.style.zIndex = number;
    enemy.height = '140';
    enemy.width = '80';
    document.getElementById('test').appendChild(enemy);

    var newEnemy = document.getElementById(enemyId);

    let y = newEnemy.offsetTop;
    let x = newEnemy.offsetLeft;
    
    newEnemy.style.top = (y+ Math.floor(Math.random() * 100)) +"px";
    newEnemy.style.left = (x+ Math.floor(Math.random() * 100)) +"px";
    number += 1;
}
setbackgroundTest();

//create a movement process.
var i = 0;
while( i < enemyAmount ){
    i++;
    enemy();
}
// console.log(enemies);
function moveEnemies(){
    //create a check to move enemy towards target
    for(item in enemies) {
        var enemyToMove = document.getElementById(enemies[item]);
        var target = document.getElementById('target');
        let y = enemyToMove.offsetTop;
        let x = enemyToMove.offsetLeft;
        var targetPos = checkPostion(target);

        if((y + enemyToMove.offsetHeight) < targetPos.top){
            y = y - 1;
            enemyToMove.style.top = (y + enemyToMove.offsetWidth) + "px";
        } else if((y + enemyToMove.offsetHeight) === targetPos.top) {
            enemyToMove.classList.add('alignTop');
        }

        if((x + enemyToMove.offsetWidth)< targetPos.left){
            x = x - 1;
            enemyToMove.style.left = x + "px";
        } 
        if((x + enemyToMove.offsetWidth) === targetPos.left) {
            enemyToMove.classList.add('alignLeft');
        }
        if(enemyToMove.classList.contains('alignLeft') == target.left && enemyToMove.classList.contains('alignTop') == target.top){
            continue;
        }
        // if((x + enemyToMove.offsetWidth) > targetPos.left){
        //     console.log(!enemyToMove.classList.contains('alignLeft'));
        //     if(!enemyToMove.classList.contains('alignLeft')){   
        //         console.log(x);
        //         // console.log(enemyToMove.style.left);

        //         // enemyToMove.style.left = x + "px";
        //         // x += 1;
        //     }
        // }
    }
}
// Checkposition

function checkPostion(imageItem){
    const position = {'top': imageItem.offsetTop, 'left': imageItem.offsetLeft};
    return position;
}

// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();
// moveEnemies();

var interval = 500;
setInterval(() => {
    moveEnemies();  
}, interval);

// function AddElementeHtml(tagItem = 'h1', text = 'Hola mundo') {
//     var tag = document.createElement(tagItem);
//     var texts = document.createTextNode(text);
//     tag.appendChild(texts);
//     var element = document.getElementById('test');
//     element.appendChild(tag);
// } 
// var element = "h2";
// var text = "this is not what you want";
// AddElementeHtml(element, text);
// AddElementeHtml();