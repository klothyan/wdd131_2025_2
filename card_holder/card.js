function isCardNumberValid(number) {
	return number === '1234123412341234'
}
function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.cardNumber.value)
	displayError('')
	if (isNaN(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)