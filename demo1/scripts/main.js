let myImage = document.querySelector('img');
let btn = document.querySelector('#btn');
let myNameHtml = document.querySelector('.userName');
let nameBtn = document.querySelector('#btn1');
function changeImg() {
    let mySrc = myImage.getAttribute('src');
	if(mySrc === './images/e26dc71187dbd2a643569e047d3872ef.jpg') {
		myImage.setAttribute('src', './images/0148d439adc2abd60e651f262c78f96c.jpg');
	} else {
		myImage.setAttribute('src', './images/e26dc71187dbd2a643569e047d3872ef.jpg')
	}
}

btn.onclick = function() {
	changeImg();
}


function getUserName() {
	if(!localStorage.getItem('name')) {
		setUserName()
	} else {
		let storageName = localStorage.getItem('name');
		myNameHtml.textContent = storageName;
	}
}

function setUserName() {
	let myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myNameHtml.textContent = myName;
}

nameBtn.onclick = function() {
	setUserName();
}

getUserName();
