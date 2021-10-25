const bulbOn = document.getElementById("bulb_on");
const bulbOff = document.getElementById("bulb_off");
const images = document.getElementById("images");
const onOfStatus = document.getElementById("on_off_status");

bulbOn.addEventListener('click', function(){
    images.src = 'images/bulb-on.gif';
    onOfStatus.innerText = 'Now Light On';
});

bulbOff.addEventListener('click', function(){
    images.src = 'images/bulb-off.gif';
    onOfStatus.innerText = 'Now Light Off';
});