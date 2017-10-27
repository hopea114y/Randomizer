window.onload = function() {
	var maxNumber = +prompt('Enter a last participating number', '999');
	var res = document.querySelector('.container');

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	res.innerHTML = randomNumber(1, maxNumber);
}

