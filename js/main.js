function calculateBmi(a, b, c) {
	switch(c) {
		case 1:
			return a/(b*b);
		case 2:
			return (a/(b*b))*703;
		case 3:
			return (a/(b*b))*4.88;
		case 4:
			return (a/(b*b))*9840;
		default:
			return false;
		
	};
};

function calculate() {
	weightUnit = document.getElementsByName("weight-unit")[0].value;
	heightUnit = document.getElementsByName("height-unit")[0].value;
	weight = document.getElementsByName("weight")[0].value;
	height = document.getElementsByName("height")[0].value;
	
	switch(weightUnit) {
		case 'kg':
			switch(heightUnit) {
				case 'm':
					return calculateBmi(weight, height, 1);
				case 'in':
					return calculateBmi(weight, height * 0.0254, 1);
				case 'ft':
					return calculateBmi(weight, height * 0.3048, 1);
				default:
					return false;
			}
		case 'lb':
			switch(heightUnit) {
				case 'm':
					return calculateBmi(weight, height * 39.3700787, 2);
				case 'in':
					return calculateBmi(weight, height, 2);
				case 'ft':
					return calculateBmi(weight, height, 3);
				default:
					return false;
			}			
		case 'st':
			switch(heightUnit) {
				case 'm':
					return calculateBmi(weight, height * 39.3700787, 4);
				case 'in':
					return calculateBmi(weight, height, 4);
				case 'ft':
					return calculateBmi(weight, height / 12, 4);
				default:
					return false;
			}
		default:
			return false;		
	}
}

function magic() {
	bmi = calculate()
	if (bmi) {
		if (bmi < 15) {
			info = "very severely underweight";
		}
		if ((bmi >= 15)&&(bmi < 16)) {
			info = "severely underweight";
		}
		if ((bmi >= 16)&&(bmi < 18.5)) {
			info = "underweight";
		}
		if ((bmi >= 18.5)&&(bmi < 25)) {
			info = "normal";
		}
		if ((bmi >= 25)&&(bmi < 30)) {
			info = "overweight";
		}
		if ((bmi >= 30)&&(bmi < 35)) {
			info = "moderately obese";
		}
		if ((bmi >= 35)&&(bmi <= 40)) {
			info = "severely obese";
		}
		if (bmi >40) {
			info = "very severely obese";
		}
		document.getElementById("result").innerHTML = "Your BMI is <span>"  + bmi + "</span><br />" + 
													  "You are <span>"  + info + "</span>.";
	} else {
		document.getElementById("result").textContent = "You broke it!";
	};
}

function init() {
	magicButton = document.getElementsByName("calculate")[0];
	magicButton.addEventListener('click', magic, false);
}

document.addEventListener('DOMContentLoaded', init, false)
