"use strict";
var gameInterval
var mult = 2
var secondsPassed;
var oldTimeStamp;
var fps;
var timeSinceLastFrame = 0
var newTime = new Date()
//var gameInterval = setInterval(runLoop, mult * 5);
var pando
var canvas
var ctx
var pandaHeight = 100
var pandaWidth = 50
var backgroundOffset = 0
//document.addEventListener("DomContentLoaded", startGame)
var backgroundImg = new Image()
backgroundImg.src = './sprites/terrain/background-fixed.png'
var nightBackgroundImg = new Image()
nightBackgroundImg.src = './sprites/terrain/background_night_fixed.png'
var pandaImg = new Image()
pandaImg.src = './sprites/panda/panda.png'
var panda1Img = new Image()
panda1Img.src = './sprites/panda/panda1.png'
var panda2Img = new Image()
panda2Img.src = './sprites/panda/panda2.png'
var panda3Img = new Image()
panda3Img.src = './sprites/panda/panda3.png'
var panda4Img = new Image()
panda4Img.src = './sprites/panda/panda4.png'
var panda5Img = new Image()
panda5Img.src = './sprites/panda/panda5.png'
var panda6Img = new Image()
panda6Img.src = './sprites/panda/panda6.png'
var panda7Img = new Image()
panda7Img.src = './sprites/panda/panda7.png'
var panda8Img = new Image()
panda8Img.src = './sprites/panda/panda8.png'
var pandaImages = [panda1Img, panda2Img, panda3Img, panda4Img, panda5Img, panda6Img, panda7Img, panda8Img]
var bambooImg = new Image()
bambooImg.src = './sprites/bamboo/baboozle.png'
var rotatedBambooImg = new Image()
rotatedBambooImg.src = './sprites/bamboo/rotated_bamboo.png'
var bambooTreeImg = new Image()
bambooTreeImg.src = './sprites/bamboo/bamboo_tree.png'
var cutBambooTreeImg = new Image()
cutBambooTreeImg.src = './sprites/bamboo/cut_bamboo_tree.png'
var green = new Image();
green.src = "./sprites/terrain/green.png"
var grass = new Image();
grass.src = "./sprites/terrain/grass-new.png"
var grassCliff = new Image();
grassCliff.src = "./sprites/terrain/grass_cliff.png"
var cliff = new Image();
cliff.src = "./sprites/terrain/cliff1.png"
var cliff1 = new Image();
cliff1.src = "./sprites/terrain/cliff2.png"
var cliff2 = new Image();
cliff2.src = "./sprites/terrain/cliff2.png"
var topGrass = new Image();
topGrass.src = "./sprites/terrain/top_grass.png"
var mushroom1 = new Image();
mushroom1.src = "./sprites/terrain/mushroom1-new.png"
var mushroom2 = new Image();
mushroom2.src = "./sprites/terrain/mushroom2-new.png"
var rock1 = new Image();
rock1.src = "./sprites/terrain/rock1-new.png"
var rock2 = new Image();
rock2.src = "./sprites/terrain/rock2-new.png"

var flameLoop1 = new Image()
flameLoop1.src = "./sprites/dragon/fire/fire_loop_1.png"
var flameLoop2 = new Image()
flameLoop2.src = "./sprites/dragon/fire/fire_loop_2.png"
var flameLoop3 = new Image()
flameLoop3.src = "./sprites/dragon/fire/fire_loop_3.png"
var flameLoop4 = new Image()
flameLoop4.src = "./sprites/dragon/fire/fire_loop_4.png"
var flameLoop5 = new Image()
flameLoop5.src = "./sprites/dragon/fire/fire_loop_5.png"
var flameLoop6 = new Image()
flameLoop6.src = "./sprites/dragon/fire/fire_loop_6.png"
var flameLoop7 = new Image()
flameLoop7.src = "./sprites/dragon/fire/fire_loop_7.png"
var flameLoop8 = new Image()
flameLoop8.src = "./sprites/dragon/fire/fire_loop_8.png"
var flameLoopImages = [flameLoop1, flameLoop2, flameLoop3, flameLoop4, flameLoop5, flameLoop6, flameLoop7, flameLoop8]



var snow = new Image();
snow.src = "./sprites/terrain/snow/snow.png"
var snow1 = new Image();
snow1.src = "./sprites/terrain/snow/snow1.png"
var snow2 = new Image();
snow2.src = "./sprites/terrain/snow/snow2.png"
var snowCliff = new Image();
snowCliff.src = "./sprites/terrain/snow/snow_cliff.png"
var topSnow = new Image();
topSnow.src = "./sprites/terrain/snow/top_snow.png"
var snowMushroom1 = new Image();
snowMushroom1.src = "./sprites/terrain/snow/mushroom1_snow.png"
var snowMushroom2 = new Image();
snowMushroom2.src = "./sprites/terrain/snow/mushroom2_snow.png"
var snowRock1 = new Image();
snowRock1.src = "./sprites/terrain/snow/rock1_snow.png"
var snowRock2 = new Image();
snowRock2.src = "./sprites/terrain/snow/rock2_snow.png"
var blueDragon1Img = new Image();
blueDragon1Img.src = "./sprites/dragon/blue_dragon1.png"
var blueDragon2Img = new Image();
blueDragon2Img.src = "./sprites/dragon/blue_dragon2.png"
var blueDragon3Img = new Image();
blueDragon3Img.src = "./sprites/dragon/blue_dragon3.png"
var bossDragon1Img = new Image();
bossDragon1Img.src = "./sprites/dragon/boss_dragon1.png"
var bossDragon2Img = new Image();
bossDragon2Img.src = "./sprites/dragon/boss_dragon2.png"
var bossDragon3Img = new Image();
bossDragon3Img.src = "./sprites/dragon/boss_dragon3.png"

var bossDragonDown1Img = new Image();
bossDragonDown1Img.src = "./sprites/dragon/down_boss_dragon1.png"
var bossDragonDown2Img = new Image();
bossDragonDown2Img.src = "./sprites/dragon/down_boss_dragon2.png"
var bossDragonDown3Img = new Image();
bossDragonDown3Img.src = "./sprites/dragon/down_boss_dragon3.png"

var bossDragonUp1Img = new Image();
bossDragonUp1Img.src = "./sprites/dragon/up_boss_dragon1.png"
var bossDragonUp2Img = new Image();
bossDragonUp2Img.src = "./sprites/dragon/up_boss_dragon2.png"
var bossDragonUp3Img = new Image();
bossDragonUp3Img.src = "./sprites/dragon/up_boss_dragon3.png"

var bossDragonHeadImg = new Image();
bossDragonHeadImg.src = "./sprites/dragon/boss_dragon_head.png"
var snowBambooTreeImg = new Image()
snowBambooTreeImg.src = './sprites/bamboo/snow_bamboo_tree.png'

var snowLeftEdge = new Image()
snowLeftEdge.src = './sprites/terrain/snow/snow_left_edge.png'


var dragonImg = new Image();
dragonImg.src = "./sprites/dragon/dragon.png"
var dragon1Img = new Image();
dragon1Img.src = "./sprites/dragon/dragon1.png"
var dragon2Img = new Image();
dragon2Img.src = "./sprites/dragon/dragon2.png"
var dragon3Img = new Image();
dragon3Img.src = "./sprites/dragon/dragon3.png"

var leftRedDragon1Img = new Image();
leftRedDragon1Img.src = "./sprites/dragon/dragon_left_1.png"
var leftRedDragon2Img = new Image();
leftRedDragon2Img.src = "./sprites/dragon/dragon_left_2.png"
var leftRedDragon3Img = new Image();
leftRedDragon3Img.src = "./sprites/dragon/dragon_left_3.png"
var fireBall1Img = new Image();
fireBall1Img.src = "./sprites/fireball/Fireball1.png"
var fireBall2Img = new Image();
fireBall2Img.src = "./sprites/fireball/Fireball2.png"
var snowballImg = new Image();
snowballImg.src = "./sprites/fireball/snowball.png"
var dragonImages = [dragon1Img, dragon2Img, dragon3Img]
var leftRedDragonImages = [leftRedDragon1Img, leftRedDragon2Img, leftRedDragon3Img]
var blueDragonImages = [blueDragon1Img, blueDragon2Img, blueDragon3Img]
var bossDragonImages = [bossDragon1Img, bossDragon2Img, bossDragon3Img]
var bossDragonUpImages = [bossDragonUp1Img, bossDragonUp2Img, bossDragonUp3Img]
var bossDragonDownImages = [bossDragonDown1Img, bossDragonDown2Img, bossDragonDown3Img]
var count = 0
var countForCount = 0
var walkingDown = false
var walkingUp = false
var walkingRight = false
var walkingLeft = false
var grassArray = []
var tileMultipiler = 4
var tileSize = 16 * tileMultipiler
var tilesArrayWidth = document.getElementById("aids").width / tileSize
var tilesArrayHeight = document.getElementById("aids").height / tileSize
var objects = []
var pandaWidth = 69
var pandaHeight = 92
var bambooWidth = 66
var bambooHeight = 21
var dragonWidth = 153
var dragonHeight = 121
var blueDragonWidth = 118
var blueDragonHeight = 91
var bambooTreeWidth = 112
var bambooTreeHeight = 400
var bambooCuttingCount = 0
var closestBamboo
var fireBallWidth = 60
var fireBallHeight = 42
var score = 0
var tileOffset = 0
var timeToShoot = 15 / mult
var backgroundSpeed = 0.2 * mult
var tileSpeed = -1 * mult
var pandaIdleSpeed = -0.5 * mult
var pandaXSpeed = 4 * mult
var pandaYSpeed = 4 * mult
var bambooTreeSpeed = -1 * mult
var dragonSpeed = -2 * mult
var blueDragonSpeed = -2 * mult
var fireBallSpeed = 5 * mult
var bambooSpeed = 10 * mult
var bamboosFromTree = 4
var scoreFromTree = 10
var timeToCut = 200 / mult
var cuttingSpeed = (Math.PI / 50) * mult
var cuttingDistance = 80
var leftArrow = false
var upArrow = false
var rightArrow = false
var downArrow = false
var countAtLastShot = 0
var shotDelay = 10
var world = 'grass'
var dayTime = true
var currentGroundTile = green
var groundTiles = [green, snow, snow1, snow2]
var groundObjects = [grass, mushroom1, mushroom2, rock1, rock2, snowMushroom1, snowMushroom2, snowRock1, snowRock2]
var paused = false
var pandaInitialX = 64
var highscore
var inBossBattle = false
var bossKilled = false
var redDragonHealth = 3
var blueDragonHealth = 4
var bossDragonHealth = 40
var bossDragonSizeRatio = 4.5
var bossDragonWidth = dragonWidth * bossDragonSizeRatio
var bossDragonHeight = dragonHeight * bossDragonSizeRatio
var bossObject

var henchman
var henchman1
var henchman2


function startGame() {
    //Init canvas
    canvas = document.getElementById("aids")
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    
    //Reset the grass array
    for(var i = 0; i < tilesArrayHeight; i++){
        grassArray[i] = []
    }
    //Generate first terrain
    for(var i = 4; i < tilesArrayHeight; i++){
        for(var j = 0; j < tilesArrayWidth + 2; j++){
            var temp = Math.random()
            if (temp < 0.07){
                grassArray[i][j] = grass;
            }
            else if (temp < 0.08){
                grassArray[i][j] = mushroom1;
            }
            else if (temp < 0.09){
                grassArray[i][j] = mushroom2;
            }
            else if (temp < 0.1){
                grassArray[i][j] = rock1;
            }
            else if (temp < 0.11){
                grassArray[i][j] = rock2;
            }
            else{
                grassArray[i][j] = green;
            }
        }
    }

    //set top and bottom edges
    for (var i = 4; i < tilesArrayHeight; i++){
        for (var j = 0; j < tilesArrayWidth + 2; j++){
            if (i == tilesArrayHeight - 3){
                grassArray[i][j] = grassCliff
                
            }
            else if (i == tilesArrayHeight - 2){
                grassArray[i][j] = cliff
                
            }
            else if (i == tilesArrayHeight - 1){
                grassArray[i][j] = cliff1
                
            }
            else if (i == 4){
                grassArray[i][j] = topGrass
                
            }
            else if (i < tilesArrayHeight - 3){
                ctx.drawImage(grassArray[i][j], j * tileSize, i * tileSize, tileSize, tileSize)
            }
        }
    }

    //Check for highscore
    //console.log(localStorage.getItem("bruh"))
    if (localStorage.getItem("Highscore")){
        console.log("reee")
        highscore = localStorage.getItem("Highscore")
    }
    else{
        highscore = 0
        localStorage.setItem("Highscore", highscore)
    }
    console.log(localStorage.getItem("Highscore"))

    pando = new Panda(pandaInitialX, canvas.height / 2 - pandaHeight / 2, pandaIdleSpeed, pandaYSpeed, pandaWidth, pandaHeight, pandaImages, null, null, null, null, 10, "walking")
    console.log(pando)
    objects.push(pando)
    newTime = new Date()
    //gameInterval = setInterval(runLoop, mult * 8);
    window.requestAnimationFrame(runLoop);
}


function getClosestBamboo(){
    var closest = null; 
    var closestDistance = 100000000;
    var distance = null;
    for(var i = 0; i < objects.length; i++){
        if (objects[i].constructor.name == "BambooTree"){
            distance = Math.sqrt(Math.pow(((pando.x + pando.width) - (objects[i].x + objects[i].width / 2)), 2) + Math.pow(((pando.y + pando.height / 2) - (objects[i].y + objects[i].height)), 2))
            if (distance < closestDistance){
                closestDistance = distance
                closest = objects[i]
            }
        }
    }
    closestBamboo = closest
    return closestDistance
}

document.onkeydown = 
    function(e){
        switch(e.keyCode){
            case 65://a
                walkingLeft = true
                pando.state = "walking"
                bambooCuttingCount = 0
                break;
            case 68://d
                walkingRight = true
                pando.state = "walking"
                bambooCuttingCount = 0
                break;
            case 87://w
                walkingUp = true;
                pando.state = "walking"
                bambooCuttingCount = 0
                break;
            case 83://s
                walkingDown = true;
                pando.state = "walking"
                bambooCuttingCount = 0
                break;
            case 69://e
                if (pando.state == "walking")
                    var dis = getClosestBamboo()
                if (dis <= cuttingDistance && closestBamboo.state){
                    pando.state = "cutting"
                }
                else{
                    pando.state = "walking"
                    bambooCuttingCount = 0
                }
                break;
            /*case 32://space
                if (pando.bamboos > 0){
                    pando.bamboos--
                    objects.push(new Bamboo(pando.x, pando.y + 40, bambooSpeed, bambooSpeed, bambooImg, bambooWidth, bambooHeight))
                }
                break;*/
            case 37://left arrow
                leftArrow = true
                break;
            case 38://up arrow
                upArrow = true
                break;
            case 39://right arrow
                rightArrow = true
                break;
            case 40://down arrow
                downArrow = true
                break;
            case 27://esc
                pauseGame()
                break;
            case 82:
                restartGame()
                break;
    }
  }
document.onkeyup = 
    function(e){
        switch(e.keyCode){
            case 65:
                walkingLeft = false
                break;
            case 68:
                walkingRight = false
                break;
            case 87:
                walkingUp = false;
                break;
            case 83:
                walkingDown = false;
                break;
            case 37://left arrow
                leftArrow = false
                break;
            case 38://up arrow
                upArrow = false
                break;
            case 39://right arrow
                rightArrow = false
                break;
            case 40://down arrow
                downArrow = false
                break;
    }
  }



function runLoop(timeStamp) {
    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Move forward in time with a maximum amount
    secondsPassed = Math.min(secondsPassed, 0.1);

    // Calculate fps
    fps = Math.round(1 / secondsPassed);

    // Draw number to the screen
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 200, 100);
    ctx.font = '25px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("FPS: " + fps, 10, 30);

    if (bossKilled){
        world = 'snow'
        currentGroundTile = snow
    }
    if (count > 7000 && !inBossBattle && !bossKilled){
        bossObject = new BossDragon(-bossDragonWidth, 100, 3, bossDragonHealth, bossDragonImages, bossDragonWidth,
            bossDragonHeight, -bossDragonWidth, 100, bossDragonWidth, bossDragonHeight)
        objects.push(bossObject)
        inBossBattle = true
    }
    count++
    tileOffset += tileSpeed
    //tileOffset %= tileSize
    //console.log(tileOffset)
    if (pando.state == "cutting"){
        bambooCuttingCount+=cuttingSpeed
    }
    backgroundOffset-=backgroundSpeed
    backgroundOffset %= canvas.width
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (dayTime){
        ctx.drawImage(backgroundImg,backgroundOffset,0);
        ctx.drawImage(backgroundImg, backgroundOffset + canvas.width, 0);
    }
    else{
        ctx.drawImage(nightBackgroundImg,backgroundOffset,0);
        ctx.drawImage(nightBackgroundImg, backgroundOffset + canvas.width, 0);
    }
    drawAmmo()

    var aids = getClosestBamboo()
    if (!(aids <= cuttingDistance && closestBamboo.state)){
        pando.state = "walking"
        bambooCuttingCount = 0
    }

    if (pando.x >= 0)
        pando.xSpeed = pandaIdleSpeed
    else{
        pando.xSpeed = 0
        pando.state = "walking"
        bambooCuttingCount = 0
    }
    if (walkingRight && pando.x < tileSize * tilesArrayWidth - pandaWidth)
        pando.xSpeed += pandaXSpeed
    if (walkingLeft && pando.x >= 0)
        pando.xSpeed -= pandaXSpeed

    //shooting bamboo
    if (pando.bamboos > 0 && count - countAtLastShot >= timeToShoot){
        if (rightArrow && !leftArrow){
            countAtLastShot = count
            pando.bamboos--
            objects.push(new Bamboo(pando.x, pando.y + 40, bambooSpeed, 0, bambooImg, bambooWidth, bambooHeight, pando.x, pando.y + 40, bambooWidth, bambooHeight))
        }
        if (leftArrow && !rightArrow){
            countAtLastShot = count
            pando.bamboos--
            objects.push(new Bamboo(pando.x, pando.y + 40, -bambooSpeed, 0, bambooImg, bambooWidth, bambooHeight, pando.x, pando.y + 40, bambooWidth, bambooHeight))
        }
        if (upArrow && !downArrow && !leftArrow && !rightArrow){
            countAtLastShot = count
            pando.bamboos--
            objects.push(new Bamboo(pando.x + pando.width / 2, pando.y, 0, -bambooSpeed, rotatedBambooImg, bambooHeight, bambooWidth, pando.x + pando.width / 2, pando.y, bambooHeight, bambooWidth))
        }
        if (!upArrow && downArrow && !leftArrow && !rightArrow){
            countAtLastShot = count
            pando.bamboos--
            objects.push(new Bamboo(pando.x + pando.width / 2, pando.y + pando.height / 2, 0, bambooSpeed, rotatedBambooImg, bambooHeight, bambooWidth, pando.x + pando.width / 2, pando.y + pando.height / 2, bambooHeight, bambooWidth))
        }
    }

    if(-tileOffset >= tileSize){
        for(var i = 4; i < tilesArrayHeight; i++){
            for(var j = -1; j < tilesArrayWidth + 1; j++){
                if(!groundTiles.includes(grassArray[i][j + 1])){
                    grassArray[i][j] = grassArray[i][j + 1]
                    grassArray[i][j + 1] = currentGroundTile
                }
                else{
                    grassArray[i][j] = grassArray[i][j + 1]
                    grassArray[i][j + 1] = currentGroundTile
                }
            }
        }
        for (var i = 4; i < tilesArrayHeight - 2; i++){
            var temp = Math.random()
            if (world == 'grass'){
                if (temp < 0.07){
                    grassArray[i][tilesArrayWidth + 1] = grass;
                }
                else if (temp < 0.08){
                    grassArray[i][tilesArrayWidth + 1] = mushroom1;
                }
                else if (temp < 0.09){
                    grassArray[i][tilesArrayWidth + 1] = mushroom2;
                }
                else if (temp < 0.1){
                    grassArray[i][tilesArrayWidth + 1] = rock1;
                }
                else if (temp < 0.11){
                    grassArray[i][tilesArrayWidth + 1] = rock2;
                }
                else{
                    grassArray[i][tilesArrayWidth + 1] = currentGroundTile;
                }
            }
            else if (world == 'snow'){
                if (temp < 0.01){
                    grassArray[i][tilesArrayWidth + 1] = snowMushroom1;
                }
                else if (temp < 0.02){
                    grassArray[i][tilesArrayWidth + 1] = snowMushroom2;
                }
                else if (temp < 0.03){
                    grassArray[i][tilesArrayWidth + 1] = snowRock1;
                }
                else if (temp < 0.04){
                    grassArray[i][tilesArrayWidth + 1] = snowRock2;
                }
                else if (temp < 0.10){
                    grassArray[i][tilesArrayWidth + 1] = snow1;
                }
                else if (temp < 0.16){
                    grassArray[i][tilesArrayWidth + 1] = snow2;
                }
                else{
                    grassArray[i][tilesArrayWidth + 1] = snow;
                }
            }
        }
        if (world == 'grass'){
            grassArray[tilesArrayHeight - 3][tilesArrayWidth + 1] = grassCliff;
            grassArray[tilesArrayHeight - 2][tilesArrayWidth + 1] = cliff;
            grassArray[tilesArrayHeight - 1][tilesArrayWidth + 1] = cliff1;
            grassArray[4][tilesArrayWidth + 1] = topGrass;
        }
        if (world == 'snow'){
            grassArray[tilesArrayHeight - 3][tilesArrayWidth + 1] = snowCliff;
            grassArray[tilesArrayHeight - 2][tilesArrayWidth + 1] = cliff;
            grassArray[tilesArrayHeight - 1][tilesArrayWidth + 1] = cliff1;
            grassArray[4][tilesArrayWidth + 1] = topSnow;
        }

        //Spawn Bamboo Trees and Dragons
        var randy = Math.random()
        if (randy < 0.15 && !inBossBattle){
            if (world == 'grass')
                objects.push(new RedDragon(canvas.width, Math.floor(Math.random() * (10 * tileSize - 3 * tileSize + 1)) + 3 * tileSize, dragonSpeed, redDragonHealth, dragonImages, dragonWidth, dragonHeight, canvas.width, Math.floor(Math.random() * (10 * tileSize - 3 * tileSize + 1)) + 3 * tileSize, dragonWidth, dragonHeight))
            if (world == 'snow')
                objects.push(new BlueDragon(canvas.width, Math.floor(Math.random() * (10 * tileSize - 3 * tileSize + 1)) + 3 * tileSize, blueDragonSpeed, blueDragonHealth, blueDragonImages, blueDragonWidth * 1.5, blueDragonHeight * 1.5, canvas.width, Math.floor(Math.random() * (10 * tileSize - 3 * tileSize + 1)) + 3 * tileSize, blueDragonWidth * 1.5, blueDragonHeight * 1.5))
        }
        if (randy < 0.2){
            if (world == 'grass')
                objects.push(new BambooTree(canvas.width, Math.floor(Math.random() * (340 + 90 + 1)) - 90, bambooTreeSpeed, bambooTreeImg, bambooTreeWidth, bambooTreeHeight, true))
            if (world == 'snow')
                objects.push(new BambooTree(canvas.width, Math.floor(Math.random() * (340 + 90 + 1)) - 90, bambooTreeSpeed, snowBambooTreeImg, bambooTreeWidth, bambooTreeHeight, true))
        }
    }
    var later = []
    for(var i = 4; i < tilesArrayHeight; i++){
        for(var j = 0; j < tilesArrayWidth + 1; j++){
            if (groundObjects.includes(grassArray[i][j])){
                if ([grass, mushroom1, mushroom2, rock1, rock2].includes(grassArray[i][j]))
                    ctx.drawImage(green, j * tileSize + tileOffset % tileSize, i * tileSize, tileSize, tileSize)
                if ([snowMushroom1, snowMushroom2, snowRock1, snowRock2].includes(grassArray[i][j]))
                    ctx.drawImage(snow, j * tileSize + tileOffset % tileSize, i * tileSize, tileSize, tileSize)
            }
            if ((j * tileSize + tileOffset % tileSize >= pando.x - pandaWidth && j * tileSize + tileOffset % tileSize <= pando.x + pandaWidth) && i == Math.floor((pando.y + pandaHeight) / tileSize) && groundObjects.includes(grassArray[Math.floor((pando.y + pandaHeight) / tileSize)][j])){
                later.push([i,j])
            }
            else{
                ctx.drawImage(grassArray[i][j], j * tileSize + tileOffset % tileSize, i * tileSize, tileSize, tileSize)
            }
        }
    }

    objects.sort((a,b) => (a.y + a.height) - (b.y + b.height))
    for(var i = 0; i < objects.length; i++){
        var objectsDeleted = objects[i].loopRoutine(i)
        if (typeof objectsDeleted == "number" && objectsDeleted){
            i -= objectsDeleted
            continue;
        }
        //Show hitboxes for debugging
        /*ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "red"
        ctx.rect(objects[i].hitboxX, objects[i].hitboxY, objects[i].hitboxWidth, objects[i].hitboxHeight)
        if (Object.getPrototypeOf(objects[i].constructor).name == "Dragon")
            ctx.rect(objects[i].hitbox1X, objects[i].hitbox1Y, objects[i].hitbox1Width, objects[i].hitbox1Height)
        ctx.stroke()*/
    
    }
    later.forEach(([i, j])=> ctx.drawImage(grassArray[i][j], j * tileSize + tileOffset % tileSize, i * tileSize, tileSize, tileSize))

    if (count % 30 == 0){
        score++
    }
    if (score > highscore){
        highscore = score
    }
    ctx.font = '34pt minecraft';
    ctx.fillStyle = "black";
    //ctx.fillText("SCORE: " + score, 60, 150);
    drawStroked(ctx, "SCORE: " + score, 60, 120, '34pt minecraft')
    drawStroked(ctx, "HIGHSCORE: " + highscore, 60, 170, '34pt minecraft')
    if (pando.state == "cutting")
        drawBambooProgress(ctx)

    if (aids <= cuttingDistance && closestBamboo.state && pando.state != "cutting"){
        /*ctx.font = '18pt minecraft';
        ctx.fillStyle = "white";
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 7;
        console.log(closestBamboo.y)
        ctx.strokeText("PRESS  E", closestBamboo.x + closestBamboo.width / 2, closestBamboo.y + closestBamboo.height / 1.4);
        ctx.fillText("PRESS  E", closestBamboo.x + closestBamboo.width / 2, closestBamboo.y + closestBamboo.height / 1.4);*/
        ctx.textAlign = "center";
        drawStroked(ctx, "PRESS  E", closestBamboo.x + closestBamboo.width / 2, closestBamboo.y + closestBamboo.height / 1.4, '18pt minecraft')
        ctx.textAlign = "left";
    }

    if(!dayTime){
        ctx.fillStyle = "#00000066"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        /*for(var i = 0; i < objects.length; i++){
            if (objects[i].constructor.name == 'FireBall'){
                ctx.save();
                ctx.translate(objects[i].x, objects[i].y);
                ctx.rotate(objects[i].angle);
                //ctx.translate(-(objects[i].x + objects[i].width / 2),-(objects[i].y + objects[i].height / 2));
                ctx.drawImage(objects[i].img, -(objects[i].width / 2), -(objects[i].height / 2), objects[i].width, objects[i].height);
                ctx.restore();
            }
        }*/
    }
    tileOffset %= tileSize
    window.requestAnimationFrame(runLoop);
}

function drawStroked(context, text, x, y, font) {
    context.font = font;
    context.strokeStyle = 'black';
    context.lineWidth = 8;
    context.strokeText(text, x, y);
    context.fillStyle = 'white';
    context.fillText(text, x, y);
}

function drawBambooProgress(ctx){
    ctx.lineWidth = 9;
    ctx.strokeStyle = "black"
    ctx.beginPath();
    ctx.arc(pando.x + pando.width / 2, pando.y - 50, 20, -(Math.PI / 2), bambooCuttingCount - (Math.PI / 2));
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white"
    ctx.beginPath();
    ctx.arc(pando.x + pando.width / 2, pando.y - 50, 20, -(Math.PI / 2), bambooCuttingCount - (Math.PI / 2));
    ctx.stroke();
}

function detectRectCollision(a, b){
    if (b.hitbox1X == null)
        return (a.hitboxX < b.hitboxX + b.hitboxWidth && a.hitboxX + a.hitboxWidth > b.hitboxX && a.hitboxY < b.hitboxY + b.hitboxHeight && a.hitboxY + a.hitboxHeight > b.hitboxY)
    return ((a.hitboxX < b.hitboxX + b.hitboxWidth && a.hitboxX + a.hitboxWidth > b.hitboxX && a.hitboxY < b.hitboxY + b.hitboxHeight && a.hitboxY + a.hitboxHeight > b.hitboxY) || (a.hitboxX < b.hitbox1X + b.hitbox1Width && a.hitboxX + a.hitboxWidth > b.hitbox1X && a.hitboxY < b.hitbox1Y + b.hitbox1Height && a.hitboxY + a.hitboxHeight > b.hitbox1Y))
}

function detectCircleRectCollision(circle, rect){
    var distX = Math.abs(circle.cx - rect.hitboxX-rect.hitboxWidth/2);
    var distY = Math.abs(circle.cy - rect.hitboxY-rect.hitboxHeight/2);

    if (distX > (rect.hitboxWidth/2 + circle.r)) { return false; }
    if (distY > (rect.hitboxHeight/2 + circle.r)) { return false; }

    if (distX <= (rect.hitboxWidth/2)) { return true; } 
    if (distY <= (rect.hitboxHeight/2)) { return true; }

    var dx=distX-rect.hitboxWidth/2;
    var dy=distY-rect.hitboxHeight/2;
    return (dx*dx+dy*dy<=(circle.r*circle.r));
}

/*function shootFireBall(drago){
    if (drago.dragonType == "red"){
        angle = Math.atan2((pando.y + pando.height / 2 - drago.y - drago.height / 2), (pando.x + pando.width / 2 - drago.x))
        normalizedVector = getNormalizedVector({x: pando.x + pando.width / 2, y: pando.y + pando.height / 2}, {x: drago.x, y: drago.y + drago.height / 2})
        objects.push(new FireBall(drago.x, drago.y + drago.height / 2, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed, angle, fireBall1Img, fireBallWidth, fireBallHeight, drago.x + 35, drago.y + drago.height / 2 + 15, 3 * 6))
    }
    if (drago.dragonType == "blue"){
        angle = Math.atan2((pando.y + pando.height * 2 / 3 - (drago.y + drago.height * 2 / 3)), (pando.x + pando.width / 2 - drago.x))
        normalizedVector = getNormalizedVector({x: pando.x + pando.width / 2, y: pando.y + pando.height * 2 / 3}, {x: drago.x, y: drago.y + drago.height * 2 / 3})
        objects.push(new FireBall(drago.x, drago.y + drago.height * 2 / 3, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed, angle, snowballImg, fireBallWidth, fireBallHeight, drago.x + 35, drago.y + drago.height / 2 + 15, 3 * 6))
    
        angle = Math.atan2((pando.y + pando.height / 3 - (drago.y + drago.height / 3)), (pando.x + pando.width / 2 - drago.x))
        normalizedVector = getNormalizedVector({x: pando.x + pando.width / 2, y: pando.y + pando.height / 3}, {x: drago.x, y: drago.y + drago.height / 3})
        objects.push(new FireBall(drago.x, drago.y + drago.height / 3, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed, angle, snowballImg, fireBallWidth, fireBallHeight, drago.x + 35, drago.y + drago.height / 2 + 15, 3 * 6))
    }
}*/

function getNormalizedVector(a, b){
    //angle = Math.atan2((a.y - b.y), (a.x - b.x))
    var vector = [(a.x - b.x), (a.y - b.y)]
    var vectorLength = Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2))
    return [vector[0] / vectorLength, vector[1] / vectorLength]
    
}

function drawAmmo(){
    ctx.font = '34pt minecraft';
    ctx.fillStyle = "black";
    ctx.drawImage(bambooImg, 70, 45, bambooWidth, bambooHeight)
    drawStroked(ctx, pando.bamboos, 150, 70, '34pt minecraft')
}

function pauseGame(){
    if (paused){
        document.getElementById("pauseMenu").remove()
        gameInterval = setInterval(runLoop, mult * 8);
        paused = false
    }
    else{
        clearInterval(gameInterval)
        paused = true
        createPauseMenu()
    }
}

function createPauseMenu(){
    var pauseMenu = document.createElement("canvas")
    document.body.appendChild(pauseMenu)
    pauseMenu.setAttribute("id", "pauseMenu")
    pauseMenu.setAttribute("style", "background-color: #A3A3A3DD; height: 700px; width: 500px;position:absolute;left:740px;top:150px")
    pauseMenu.width = 500
    pauseMenu.height = 700
    pauseMenu.style.width = 500
    pauseMenu.style.height = 700
}

function restartGame(){
    clearInterval(gameInterval)
    objects = []
    score = 0
    count = 0
    world = 'grass'
    currentGroundTile = green
    startGame()

}




function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x= " + x + "||" + "y= " + y);
    return [x, y];
}

function clearLeaderboard(){
    localStorage.setItem("Leaderboard", "")
}

function submitHighScore(){
    highscoreName = document.getElementById("HighscoreName").value
    console.log("highscorename = " + highscoreName)
    updateLeaderboard(highscoreName)
}

function updateLeaderboard(n){
    if (localStorage.getItem("Leaderboard")){
        console.log("bro")
        currentLeaderboard = localStorage.getItem("Leaderboard").split(";").reverse()
        currentLeaderboard.push(n + ":" + highscore)
        currentLeaderboard.sort((a,b) => (a.split(":")[1]) - (b.split(":")[1]))
        if (currentLeaderboard.length > 5)
            currentLeaderboard.pop()
        newLeaderboard = currentLeaderboard.reverse().join(";")
        localStorage.setItem("Leaderboard", newLeaderboard)
    }
    else
        localStorage.setItem("Leaderboard", n + ":" + highscore)

}


function createEndScreen(gotHighscore) {
    if (gotHighscore){
        var endScreen = document.createElement("div");
        document.body.appendChild(endScreen);
        endScreen.setAttribute("id", "endScreen");
        endScreen.setAttribute("style", "background-color: #000000dd; height: 550px; width: 900px; position:absolute;left:350px;top:150px;")
        endScreen.style.borderImage = "border-image: url(./sprites/bamboo/baboozle.png) 30 round"
        var congratsMessage = document.createElement("div");
        endScreen.appendChild(congratsMessage)
        congratsMessage.setAttribute("class", "stroketext")
        congratsMessage.setAttribute("style", "font-size: 34pt;font-family: minecraft;color: white;text-align: center;")
        congratsMessage.innerHTML = "Congratulations!"
        highscoreMessage = document.createElement("div");
        endScreen.appendChild(highscoreMessage)
        highscoreMessage.setAttribute("style", "font-size: 34pt;font-family: minecraft;color: white;text-align: center;")
        highscoreMessage.innerHTML = "You got a new Highscore!"
        nameInput = document.createElement("input");
        endScreen.appendChild(nameInput)
        highscoreMessage.setAttribute("type", "text")
        highscoreMessage.setAttribute("id", "HighscoreName");
        submitButton = document.createElement("input");
        endScreen.appendChild(submitButton)
        submitButton.setAttribute("type", "button")
        submitButton.value = "Submit"
        submitButton.onclick = submitHighScore()

    }
    else{

    }



    return
    var width = 10;
    var height = 20;
    var endScreen = document.createElement("canvas");
    document.body.appendChild(endScreen);
    endScreen.setAttribute("id", "endScreen");
    endScreen.setAttribute("style", "background-color: #000000dd; height: 550px; width: 900px; position:absolute;left:350px;top:150px;");
    endScreen.width=900;
    endScreen.height=550;
    endScreen.style.width=width;
    endScreen.style.height=height;
    var ctx = endScreen.getContext("2d");
    if (gotHighscore){
        ctx.textAlign="center"; 
        ctx.textBaseline = "middle";
        drawStroked(ctx, "Congratulations!", 450, 100, '34pt minecraft')
        drawStroked(ctx, "You got a new highscore :)", 450, 150, '34pt minecraft')
    }
    else{

    }
  }








class WorldObject{
    constructor(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg) {
        this._x = firstX
        this._y = firstY;
        this._xSpeed = firstXSpeed;
        this._height = firstHeight
        this._width = firstWidth;
        this._img = firstImg
    }
    move(){
        this.x += this.xSpeed
    }
    drawSelf(){
        ctx.drawImage(this._img, this._x, this._y, this._width, this._height)
    }
    loopRoutine(i){
        if(this._x > canvas.width || this._x < -this._width){
            objects.splice(i, 1)
            return 1
        }
        this.move()
        this.drawSelf()
    }
    get x() {
        return this._x
    }
    set x(newX) {
        this._x = newX;
    }
    get y() {
        return this._y
    }
    set y(newY) {
        this._y = newY;
    }
    get xSpeed() {
        return this._xSpeed
    }
    set xSpeed(newXSpeed) {
        this._xSpeed = newXSpeed;
    }
    get width() {
        return this._width
    }
    set width(newWidth) {
        this._width = newWidth;
    }
    get height() {
        return this._height
    }
    set height(newHeight) {
        this._height = newHeight;
    }
    get img() {
        return this._img
    }
    set img(newImg) {
        this._img = newImg;
    }
}

class HitboxObject extends WorldObject{
    constructor(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight) {
        super(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg);
        this._hitboxX = firstHitboxX
        this._hitboxY = firstHitboxY;
        this._hitboxHeight = firstHitboxHeight
        this._hitboxWidth = firstHitboxWidth;
    }
    move(){
        super.move()
        this.hitboxX += this.xSpeed
    }
    loopRoutine(i){
        super.loopRoutine(i)
    }
    get hitboxX() {
        return this._hitboxX
    }
    set hitboxX(newHitboxX) {
        this._hitboxX = newHitboxX;
    }
    get hitboxY() {
        return this._hitboxY
    }
    set hitboxY(newHitboxY) {
        this._hitboxY = newHitboxY;
    }
    get hitboxWidth() {
        return this._hitboxWidth
    }
    set hitboxWidth(newHitboxWidth) {
        this._hitboxWidth = newHitboxWidth;
    }
    get hitboxHeight() {
        return this._hitboxHeight
    }
    set hitboxHeight(newHitboxHeight) {
        this._hitboxHeight = newHitboxHeight;
    }
}


class Dragon extends HitboxObject{
    constructor(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight) {
        super(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight)
        this._health = firstHealth;
        this._hitboxX = this._x + this._width * (1/30)
        this._hitboxY = this._y + this._height * (5/12)
        this._hitboxWidth = this._width * (2/3)
        this._hitboxHeight = this._height * (4/12)
        this._hitbox1X = this._x + this._width * (3/12)
        this._hitbox1Y = this._y + this._height * (1/5)
        this._hitbox1Width = this._width * (4/12)
        this._hitbox1Height = this._height * (8 / 12)
        this._fullHealth = firstHealth
    }
    move(){
        super.move()
        this._hitbox1X += this._xSpeed
    }
    shootFireBall(){
        var source = {x: this.x, y: this.y + this.height / 2}
        var dest = {x: pando.x + pando.width / 2, y: pando.y + pando.height / 2}
        var angle = Math.atan2((dest.y - source.y), (dest.x - source.x))
        var normalizedVector = getNormalizedVector(dest, source)
        objects.push(new FireBall(this.x, this.y + this.height / 2, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed, angle, fireBall1Img, fireBallWidth, fireBallHeight, this.x + 35, this.y + this.height / 2 + 15, 3 * 6))
    }
    drawHealthBar(){
        //ctx.fillStyle = "red";
        //ctx.fillRect(this._x + this._width / 2 - 45, this._y - this._height / 4, this._health * 30, 12)
        ctx.fillStyle = "red"
        ctx.lineWidth = 2
        ctx.beginPath();
        ctx.roundRect(this._x + this._width / 2 - 55, this._y - this._height / 5, (this._health / this._fullHealth) * 90, 12, 1);
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.beginPath();
        ctx.roundRect(this._x + this._width / 2 - 55, this._y - this._height / 5, 90, 12, 1);
        ctx.stroke();
        //ctx.drawImage(bossDragonHeadImg, canvas.width / 2 - 800 / 2 - (35 * 1.5) / 2, canvas.height - 80 - (45 * 1.5) / 5, 35 * 1.5, 45 * 1.5)
    }
    drawSelf(){
        ctx.drawImage(this._img[Math.floor(count / ((27 - 1.5 * Math.abs(this._xSpeed)) / mult)) % 3], this._x, this._y, this._width, this._height)
        this.drawHealthBar()
    }
    loopRoutine(i){
        super.loopRoutine(i)
        var randy = Math.random()
        if (randy < 0.004){
            this.shootFireBall()
        }
    }
    get health() {
        return this._health
    }
    set health(newHealth) {
        this._health = newHealth;
    }
    get hitbox1X() {
        return this._hitbox1X
    }
    set hitbox1X(newHitbox1X) {
        this._hitbox1X = newHitbox1X;
    }
    get hitbox1Y() {
        return this._hitbox1Y
    }
    set hitbox1Y(newHitbox1Y) {
        this._hitbox1Y = newHitbox1Y;
    }
    get hitbox1Width() {
        return this._hitbox1Width
    }
    set hitbox1Width(newHitbox1Width) {
        this._hitbox1Width = newHitbox1Width;
    }
    get hitbox1Height() {
        return this._hitbox1Height
    }
    set hitbox1Height(newHitbox1Height) {
        this._hitbox1Height = newHitbox1Height;
    }
}

class RedDragon extends Dragon{
    constructor(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight) {
        super(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight)
    }
}

class BlueDragon extends Dragon{
    constructor(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight) {
        super(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight)
    }

    shootFireBall(){
        var source = {x: this.x, y: this.y + this.height * 2 / 3}
        var dest = {x: pando.x + pando.width / 2, y: pando.y + pando.height}
        var angle = Math.atan2((dest.y - source.y), (dest.x - source.x))
        var normalizedVector = getNormalizedVector(dest, source)
        objects.push(new FireBall(this.x, this.y + this.height / 3, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed, angle, snowballImg, fireBallWidth, fireBallHeight, this.x + 35, this.y + this.height / 2 + 15, 3 * 6))
        source = {x: this.x, y: this.y + this.height / 3}
        dest = {x: pando.x + pando.width / 2, y: pando.y}
        angle = Math.atan2((dest.y - source.y), (dest.x - source.x))
        normalizedVector = getNormalizedVector(dest, source)
        objects.push(new FireBall(this.x, this.y + this.height / 3, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed, angle, snowballImg, fireBallWidth, fireBallHeight, this.x + 35, this.y + this.height / 2 + 15, 3 * 6))
    }
}

class BossDragon extends Dragon{
    constructor(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight) {
        super(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight)
        this._hitboxX = this._x + this._width * (5/15)
        this._hitboxY = this._y + this._height * (5/12)
        this._hitboxWidth = this._width * (2/3)
        this._hitboxHeight = this._height * (4/12)
        this._hitbox1X = this._x + this._width * (5/12)
        this._hitbox1Y = this._y + this._height * (1/5)
        this._hitbox1Width = this._width * (4/12)
        this._hitbox1Height = this._height * (8 / 12)
        this._timeSinceSummon = 0
        this._henchmen = [];
        this._charging = false
        this._ySpeed = 0
        this._chragePhase = 1
        this._fightStarted = false
        
    }
    get henchmen() {
        return this._henchmen
    }
    set henchmen(newHenchmen) {
        this._henchmen = newHenchmen;
    }
    move(){
        super.move()
        this._y += this._ySpeed
        this._hitboxY += this._ySpeed
        this._hitbox1Y += this._ySpeed
    }
    drawHealthBar(){
        if (this._fightStarted){
            ctx.fillStyle = "#a20509"
            ctx.lineWidth = 3
            ctx.beginPath();
            ctx.roundRect(canvas.width / 2 - 800 / 2, canvas.height - 80, (this._health / this._fullHealth) * 800, 30, 5);
            ctx.fill()
            ctx.strokeStyle = "black"
            ctx.beginPath();
            ctx.roundRect(canvas.width / 2 - 800 / 2, canvas.height - 80, 800, 30, 5);
            ctx.stroke();
            ctx.drawImage(bossDragonHeadImg, canvas.width / 2 - 800 / 2 - (35 * 1.5) / 2, canvas.height - 80 - (45 * 1.5) / 5, 35 * 1.5, 45 * 1.5)
        }
    }
    shootFireBall(){
        var source = {x: this._x + this._width * 19 / 20, y: this._y + this._height * 2 / 3}
        var dest = {x: pando.x + pando.width / 2, y: pando.y + pando.height}
        var angle = Math.atan2((dest.y - source.y), (dest.x - source.x))
        var normalizedVector = getNormalizedVector(dest, source)
        objects.push(new FireBall(this._x + this._width * 19 / 20, this._y + this._height * 2 / 3, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed, angle, fireBall2Img, fireBallWidth * 1.4, fireBallHeight * 1.4, this._x + 35, this._y + this._height / 2 + 15, 3 * 6 * 1.4))
        source = {x: this._x, y: this._y + this._height * 9 / 12}
        dest = {x: pando.x + pando.width / 2, y: pando.y}
        angle = Math.atan2((dest.y - source.y), (dest.x - source.x))
        normalizedVector = getNormalizedVector(dest, source)
        objects.push(new FireBall(this._x + this._width, this._y + this._height * 9 / 12, normalizedVector[0] * fireBallSpeed, normalizedVector[1] * fireBallSpeed , angle, fireBall2Img, fireBallWidth * 1.4, fireBallHeight * 1.4, this._x + 35, this._y + this._height / 2 + 15, 3 * 6 * 1.4))
    }
    summonHenchmen(){
        if (this._henchmen.indexOf(henchman) == -1){
            henchman = new HenchmanRedDragon(-dragonWidth, 600, 3, 3, leftRedDragonImages, dragonWidth, dragonHeight, -dragonWidth, 100, dragonWidth, dragonHeight, 50)
            this._henchmen.push(henchman)
            objects.push(henchman)
            this._timeSinceSummon = 0
        }
        if (this._henchmen.indexOf(henchman1) == -1){
            henchman1 = new HenchmanRedDragon(-dragonWidth, 200, 3, 3, leftRedDragonImages, dragonWidth, dragonHeight, -dragonWidth, 100, dragonWidth, dragonHeight, 150)
            this._henchmen.push(henchman1)
            objects.push(henchman1)
            this._timeSinceSummon = 0
        }
        if (this._henchmen.indexOf(henchman2) == -1){
            henchman2 = new HenchmanRedDragon(-dragonWidth, 500, 3, 3, leftRedDragonImages, dragonWidth, dragonHeight, -dragonWidth, 100, dragonWidth, dragonHeight, 500)
            this._henchmen.push(henchman2)
            objects.push(henchman2)
            this._timeSinceSummon = 0
        }
    }
    chargeAttack(){
        if (this._chragePhase == 1){
            this._xSpeed = 9
            if (this._x >= canvas.width){
                this._chragePhase = 2
                this._x = 100
                this._y = canvas.height
                this._img = bossDragonUpImages
                this._width*=1.3
                this._height*=1.3
                this._hitboxX = this._x + this._width * (13/30)
                this._hitboxY = this._y + this._height * (2/15)
                this._hitboxWidth = this._width * (2/15)
                this._hitboxHeight = this._height * (9/15)
                this._hitbox1X = this._x + this._width * (2/15)
                this._hitbox1Y = this._y + this._height * (4/15)
                this._hitbox1Width = this._width * (11/15)
                this._hitbox1Height = this._height * (2/12)
            }
        }
        if (this._chragePhase == 2){
            this._ySpeed = -8
            this._xSpeed = 0
            if (this._y <= -this._height){
                this._chragePhase = 3
                this._x = 600
                this._y = -this._height
                this._img = bossDragonDownImages
                this._hitboxX = this._x + this._width * (13/30)
                this._hitboxY = this._y + this._height * (4/15)
                this._hitboxWidth = this._width * (2/15)
                this._hitboxHeight = this._height * (9/15)
                this._hitbox1X = this._x + this._width * (2/15)
                this._hitbox1Y = this._y + this._height * (9/15)
                this._hitbox1Width = this._width * (11/15)
                this._hitbox1Height = this._height * (2/12)
            }
        }
        if (this._chragePhase == 3){
            this._ySpeed = 8
            this._xSpeed = 0
            if (this._y >= canvas.height){
                this._chragePhase = 4
                this._x = 1100
                this._y = canvas.height
                this._img = bossDragonUpImages
                this._hitboxX = this._x + this._width * (13/30)
                this._hitboxY = this._y + this._height * (2/15)
                this._hitboxWidth = this._width * (2/15)
                this._hitboxHeight = this._height * (9/15)
                this._hitbox1X = this._x + this._width * (2/15)
                this._hitbox1Y = this._y + this._height * (4/15)
                this._hitbox1Width = this._width * (11/15)
                this._hitbox1Height = this._height * (2/12)
            }
        }
        if (this._chragePhase == 4){
            this._ySpeed = -8
            this._xSpeed = 0
            if (this._y <= -this._height){
                this._charging = false
                this._chragePhase = 0
                this._x = -this.width
                this._y = 100
                this._ySpeed = 0
                this._xSpeed = 3
                this._img = bossDragonImages
                this._width/=1.3
                this._height/=1.3
                this._hitboxX = this._x + this._width * (5/15)
                this._hitboxY = this._y + this._height * (5/12)
                this._hitboxWidth = this._width * (2/3)
                this._hitboxHeight = this._height * (4/12)
                this._hitbox1X = this._x + this._width * (5/12)
                this._hitbox1Y = this._y + this._height * (1/5)
                this._hitbox1Width = this._width * (4/12)
                this._hitbox1Height = this._height * (8 / 12)
            }
        }

        
    }
    loopRoutine(i){
        if (this._x >= 50 && !this._fightStarted){
            this._fightStarted = true
        }
        if (this._x >= 50 && !this._charging){
            this._xSpeed = 0
        }
        this.move()
        if (this._henchmen.indexOf(henchman) == -1 || this._henchmen.indexOf(henchman1) == -1 || this._henchmen.indexOf(henchman2) == -1)
            this._timeSinceSummon++
        if (this._timeSinceSummon >= 300){
            this.summonHenchmen()
        }
        if (this._health == bossDragonHealth / 2 && this._chragePhase == 1)
            this._charging = true
        if (this._charging)
            this.chargeAttack()
        var randy = Math.random()
        if (randy < 0.008 && this._x >= 50 && !this._charging){
            this.shootFireBall()
        }
        this.drawSelf()
    }
}

class HenchmanRedDragon extends Dragon{
    constructor(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight, firstXLimit) {
        super(firstX, firstY, firstXSpeed, firstHealth, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight)
        this._xLimit = firstXLimit
        this._hitboxX = this._x + this._width * (5/15)
        this._hitboxY = this._y + this._height * (5/12)
        this._hitboxWidth = this._width * (2/3)
        this._hitboxHeight = this._height * (4/12)
        this._hitbox1X = this._x + this._width * (5/12)
        this._hitbox1Y = this._y + this._height * (1/5)
        this._hitbox1Width = this._width * (4/12)
        this._hitbox1Height = this._height * (8 / 12)
    }
    loopRoutine(i){
        if (this._x >= this._xLimit){
            this._xSpeed = 0
        }
        super.loopRoutine(i)
    }
}


class Bamboo extends HitboxObject{
    constructor(firstX, firstY, firstXSpeed, firstYSpeed, firstImg, firstWidth, firstHeight, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight) {
        super(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight)
        this._ySpeed= firstYSpeed;
    }
    move(){
        super.move()
        this._y += this._ySpeed
        this._hitboxY += this._ySpeed
    }
    handleCollisions(i){
        for (var j = 0; j < objects.length; j++){
            if (Object.getPrototypeOf(objects[j].constructor).name == "Dragon"){
                if (detectRectCollision(objects[i], objects[j])){
                    if (!(objects[j].constructor.name == "BossDragon" && objects[j].x < 50)){
                        objects[j].health--
                        if (objects[j].health <= 0){
                            if (objects[j].constructor.name == "BossDragon"){
                                bossKilled = true
                                inBossBattle = false
                            }
                            if (objects[j].constructor.name == "HenchmanRedDragon"){
                                bossObject.henchmen.splice(bossObject.henchmen.indexOf(objects[j]), 1)
                            }
                            objects.splice(j, 1)
                            score+=100
                            if (i > j){
                                objects.splice(i - 1, 1)
                                return 2
                            }
                        }
                        objects.splice(i, 1)
                        return 1
                    }
                }
            }
            if (objects[j].constructor.name == "FireBall"){
                if (detectCircleRectCollision(objects[j], objects[i])){
                    objects.splice(j, 1)
                    if (i > j){
                        objects.splice(i - 1, 1)
                        return 2
                    }
                    objects.splice(i, 1)
                    return 1
                }
            }
        }
        return 0
    }
    loopRoutine(i){
        super.loopRoutine(i)
        return this.handleCollisions(i)
    }
    get ySpeed() {
        return this._ySpeed
    }
    set ySpeed(newYSpeed) {
        this._ySpeed = newYSpeed;
    }
}

class BambooTree extends WorldObject{
    constructor(firstX, firstY, firstXSpeed, firstImg, firstWidth, firstHeight, firstState) {
        super(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg)
        this._state = firstState;
    }
    get state() {
        return this._state
    }
    set state(newState) {
        this._state = newState;
    }
}

class FireBall extends WorldObject{
    constructor(firstX, firstY, firstXSpeed, firstYSpeed, firstAngle, firstImg, firstWidth, firstHeight, firstCx, firstCy, firstR) {
        super(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg)
        this._ySpeed = firstYSpeed;
        this._angle = firstAngle;
        this._cx = firstCx
        this._cy = firstCy
        this._r = firstR
    }
    move(){
        super.move()
        this.y += this.ySpeed
        this.cx = this.x
        this.cy = this.y
    }
    drawSelf(){
        /*ctx.lineWidth = 3;
        ctx.strokeStyle = "red"
        ctx.beginPath();
        ctx.arc(this._cx, this._cy, this._r, 0, (Math.PI * 2));
        ctx.stroke();*/
        ctx.save();
        ctx.translate(this._x, this._y);
        ctx.rotate(this._angle);
        //ctx.translate(-(objects[i].x + objects[i].width / 2),-(objects[i].y + objects[i].height / 2));
        ctx.drawImage(this._img, -(this._width / 2), -(this._height / 2), this._width, this._height);
        ctx.restore();
    }
    burn(){
        if (this._cy > 4 * tileSize && this._cy < (tilesArrayHeight - 3) * tileSize)
            objects.push(new Flame(this._cx - 15 * 5 / 2, this._cy - 23 * 5, tileSpeed, 15 * 5, 23 * 5, flameLoopImages, this._cx - 15 * 5 / 2, this._cy - 23 * 5, 15 * 5, 23 * 5))
    }
    loopRoutine(i){
        super.loopRoutine(i)
        if (this._img == fireBall2Img && Math.sqrt(Math.pow((bossObject.x + bossObject.width - this._x), 2) + Math.pow((bossObject.y + bossObject.height * 2 / 3 - this._y), 2)) > canvas.width - (bossObject.x + bossObject.width) - pando.width && this._cy > 5 * tileSize && this._cy < (tilesArrayHeight - 3) * tileSize){
            this.burn()
            objects.splice(i, 1)
            return 1
        }
        return 0
    }
    get ySpeed() {
        return this._ySpeed
    }
    set ySpeed(newYSpeed) {
        this._ySpeed = newYSpeed;
    }
    get angle() {
        return this._angle
    }
    set angle(newAngle) {
        this._angle = newAngle;
    }
    get cx() {
        return this._cx
    }
    set cx(newCx) {
        this._cx = newCx;
    }
    get cy() {
        return this._cy
    }
    set cy(newCy) {
        this._cy = newCy;
    }
    get r() {
        return this._r
    }
    set r(newR) {
        this._r = newR;
    }

}

class Panda extends HitboxObject {
    constructor(firstX, firstY, firstXSpeed, firstYSpeed, firstWidth, firstHeight, firstImg, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight, firstBamboos, firstState) {
        super(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight)
        this._ySpeed = firstYSpeed;
        this._bamboos = firstBamboos;
        this._state = firstState;
        this._hitboxX = this._x + this._width * (1/7)
        this._hitboxY = this._y + this._height * (1/9)
        this._hitboxWidth = this._width * (5/7)
        this._hitboxHeight = this._height * (7.5/9)
    }
    move(){
        super.move()
        if (walkingDown && this.y < tileSize * 10){
            this.y += this.ySpeed
            this.hitboxY += this.ySpeed
        }
        if (walkingUp && this.y > tileSize * 3){
            this.y -= this.ySpeed
            this.hitboxY -= this.ySpeed
        }
    }
    death(){
        clearInterval(gameInterval)
        if (score >= highscore){
            highscore = score
            localStorage.setItem("Highscore", highscore);
            createEndScreen(true)
        }
        else{
            createEndScreen(false)
        }
        
    }
    drawSelf(){
        if (this._xSpeed == tileSpeed)
            ctx.drawImage(this._img[0], this._x, this._y, this._width, this._height)
        else
            ctx.drawImage(this._img[Math.floor(count / (9/mult)) % 8], this._x, this._y, this._width, this._height)
    }
    handleCollisions(i){
        for (var j = 0; j < objects.length; j++){
            if (Object.getPrototypeOf(objects[j].constructor).name == "Dragon"){
                if (detectRectCollision(objects[i], objects[j])){
                    objects[i].death()
                }
            }
            if (objects[j].constructor.name == "FireBall"){
                if (detectCircleRectCollision(objects[j], objects[i])){
                    objects[i].death()
                }
            }
            if (objects[j].constructor.name == "Flame"){
                if (detectRectCollision(objects[i], objects[j])){
                    objects[i].death()
                }
            }
        }
    }
    checkCuttingProgress(){
        if (pando.state == "cutting" && pando.x >= 0){
            pando.xSpeed = tileSpeed
            //drawBambooProgress(ctx)
            if (bambooCuttingCount >= Math.PI * 2){
                closestBamboo.state = false
                closestBamboo.img = cutBambooTreeImg
                pando.bamboos+=bamboosFromTree
                pando.state = "walking"
                bambooCuttingCount = 0
                score += scoreFromTree
            }
        }
    }
    loopRoutine(i){
        this.checkCuttingProgress()
        super.loopRoutine(i)
        this.handleCollisions(i)
    }
    get ySpeed() {
        return this._ySpeed
    }
    set ySpeed(newYSpeed) {
        this._ySpeed = newYSpeed;
    }
    get bamboos() {
        return this._bamboos
    }
    set bamboos(newBamboos) {
        this._bamboos = newBamboos;
    }
    get state() {
        return this._state
    }
    set state(newState) {
        this._state = newState;
    }

}

class Flame extends HitboxObject{
    constructor(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight) {
        super(firstX, firstY, firstXSpeed, firstWidth, firstHeight, firstImg, firstHitboxX, firstHitboxY, firstHitboxWidth, firstHitboxHeight);
        this._hitboxX = this._x + this._width * (1/15)
        this._hitboxY = this._y + this._height * (2/3)
        this._hitboxWidth = this._width * (13/15)
        this._hitboxHeight = this._height / 6
    }
    drawSelf(){
        ctx.drawImage(this._img[Math.floor(count / (9/mult)) % 8], this._x, this._y, this._width, this._height)
    }
    updateHitbox(){
        if (this._y + this._height > pando.y + pando._height){
            this._hitboxX = this._x + this._width * (2/15)
            this._hitboxY = this._y + this._height * (2/3)
            this._hitboxWidth = this._width * (11/15)
            this._hitboxHeight = this._height / 6
        }
        else{
            this._hitboxX = this._x + this._width * (3/15)
            this._hitboxY = this._y + this._height * (1/2)
            this._hitboxWidth = this._width * (9/15)
            this._hitboxHeight = this._height / 8
        }
    }
    loopRoutine(i){
        this.updateHitbox()
        super.loopRoutine(i)
    }
}



startGame()