window.onload = function () {
	const initPerson = personGenerator.getPerson()
	document.getElementById('firstNameOutput').innerText = initPerson.firstName
	document.getElementById('SurnameOutput').innerText = initPerson.surname
	document.getElementById('genderOutput').innerText = initPerson.gender
	document.getElementById('birthYearOutput').innerText = initPerson.date
	document.getElementById('MiddleNameOutput').innerText = initPerson.middleName
	document.getElementById('ProfessionOutput').innerText = initPerson.profession
	const btn = document.getElementById('btn')
	btn.addEventListener('click', () => {
		location.reload()
	})
}
