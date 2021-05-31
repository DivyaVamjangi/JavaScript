function ageindays() {
    var db = document.getElementById('flex-box-result');
    db.innerHTML = "";
    var birthyear = prompt("Which year were you born ??");
    var ageindayss = (2021 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageindayss + 'days');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageindays').remove();
}

function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-dog-gen');
    image.src = "https://i.pinimg.com/originals/bc/1c/e9/bc1ce92ab12174b3bded072179b0da9f.gif";
    div.appendChild(image);
}

function resetdog()
{   
    const myNode = document.getElementById("flex-dog-gen");
    myNode.innerHTML = '';
}

function rpsgame(yourchoice) {
    console.log(yourchoice);
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;

    botchoice = numbertochoice(randtorpsint());
    console.log("computer choice:", botchoice);

    results = decidewinner(humanchoice, botchoice);
    console.log(results);

    message = finalmessage(results);
    console.log(message);

    rpsfrontend(yourchoice.id, botchoice, message);
}

function randtorpsint() {
    return Math.floor(Math.random() * 3);
}

function numbertochoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decidewinner(yourchoice, computerchoice) {
    var rpsdatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'rock': 0, 'scissors': 0.5, 'paper': 1 }
    };

    var yourscore = rpsdatabase[yourchoice][computerchoice];
    var computerscore = rpsdatabase[computerchoice][yourchoice];

    return [yourscore, computerscore];
}

function finalmessage([yourscore, computerscore]) {
    if (yourscore == 0) {
        return { 'message': 'You lost', 'color': 'red' };
    } else if (yourscore == 0.5) {
        return { 'message': 'You tied', 'color': 'yellow' };
    } else {
        return { 'message': 'You won', 'color': 'green' };
    }

}

function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {
    var imagedatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    const node= document.getElementById("flex-box-rps-div");
    node.innerHTML = '';

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalmessage['color'] + ";font-size: 60px; padding: 30px;'>" + finalmessage['message'] + "<h1>"
    botDiv.innerHTML = "<img src='" + imagedatabase[botimagechoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

function HackerRank()
{
        window.open("http://hackerrank.com/", "_blank");
}

function GitHub()
{
        window.open("https://github.com/", "_blank");
}

function LinkedIn()
{
        window.open("https://www.linkedin.com/in/", "_blank");
}

function Kaggle()
{
        window.open("https://www.kaggle.com/", "_blank");
}

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttoncolorchange(buttonThingy) {
    if (buttonThingy.value == 'red') {
        buttonsred();
    } else if (buttonThingy.value == 'green') {
        buttonsgreen();
    } else if (buttonThingy.value == 'reset') {
        buttoncolorreset();
    } else if (buttonThingy.value = 'random') {
        randomcolors();
    }
}

function buttonsred() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsgreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttoncolorreset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomcolors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_buttons.length; i++) {
        let randomnumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomnumber]);
    }
}

function playagain()
{
    const node= document.getElementById("flex-box-rps-div");
    node.innerHTML = '';
    var rockDiv = document.createElement('div');
    var paperDiv = document.createElement('div');
    var scissorsDiv = document.createElement('div');
    rockDiv.innerHTML="<img id='rock' src='https://media.istockphoto.com/photos/limestone-picture-id170215830?k=6&m=170215830&s=612x612&w=0&h=Fua6_L10GPrfgKkQcoSaGh_jsQc0Pg7vD_dJ1fQtieo=' height=150 width=150 alt onclick='rpsgame(this)'>";
    paperDiv.innerHTML ="<img id='paper' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXWpGLqwZE_B8QCQjqaRwRYpJRKFaZvWQuw&usqp=CAU' height=150 width=150 alt onclick='rpsgame(this)'>";
    scissorsDiv.innerHTML ="<img id='scissors' src='https://media.istockphoto.com/photos/open-scissors-picture-id1168085197?k=6&m=1168085197&s=612x612&w=0&h=8jtd8iJhZd0p3InFIomdTqZLrfJynIGqbhtIj1dR-eI=' height=150 width=150 alt onclick='rpsgame(this)'>";
    document.getElementById('flex-box-rps-div').appendChild(rockDiv);
    document.getElementById('flex-box-rps-div').appendChild(paperDiv);
    document.getElementById('flex-box-rps-div').appendChild(scissorsDiv);
}