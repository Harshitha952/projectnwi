window.onload = () => {
	let button = document.querySelector("#btn");
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
	let height = parseInt(document
			.querySelector("#height").value);

	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(1);

		// Dividing as per the bmi conditions
		if (bmi <= 18.4) result.innerHTML =
			`Under Weight (Malnutrition Risk) : <span>${bmi}</span>`;

		else if (bmi >= 18.5 && bmi < 25)
			result.innerHTML =
				`Normal Weight (Low Risk): <span>${bmi}</span>`;

		else if (bmi >= 25 && bmi < 30)
			result.innerHTML =
				`Overweight (Enhanced Risk): <span>${bmi}</span>`;
		
		else if (bmi >= 30 && bmi < 35)
			result.innerHTML =
				`Moderately Obese (Medium Risk) : <span>${bmi}</span>`;
				
		else if (bmi >= 35 && bmi < 40)
			result.innerHTML =
				`Severely Obese (High Risk) : <span>${bmi}</span>`;

		else result.innerHTML =
			`Very Severely Obese (Very High Risk) : <span>${bmi}</span>`;
	}
}
