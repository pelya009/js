const arr2=document.getElementsByClassName('button');
const blue_button=arr2[0];
const green_button=arr2[1];
const red_button=arr2[2];
const grey_button=arr2[3];

function squareCreation(color) {
	let arr=document.getElementsByClassName(`square-${color}`);
	if (arr.length === 0) {
		let newDiv = document.createElement('div');
 		let container = document.getElementById('cont');
  		container.appendChild(newDiv);
  		newDiv.classList.add('square');
  		newDiv.classList.add(`square-${color}`);
	} else {
		let size = arr[0];
		size.style.width = size.offsetWidth + 30 + 'px';
		size.style.height = size.offsetHeight + 30 + 'px';
	}


};

blue_button.addEventListener('click', () => squareCreation('blue'));
green_button.addEventListener('click', () => squareCreation('green'));
red_button.addEventListener('click', () => squareCreation('red'));
grey_button.addEventListener('click', () => squareCreation('grey'));




