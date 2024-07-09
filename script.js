document.getElementById('bmiForm').addEventListener('submit',function(e){
    e.preventDefault()

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById('weight').value);

    if(gender && age && heightFeet && heightInches && weight){
        const heightInMeters = ((heightFeet*12)+heightInches)*0.0254;
        const bmi = weight/(heightInMeters*heightInMeters);
        const resultElement = document.getElementById("result");

        if (age >= 18) { // Adult categories
            if (bmi < 18.5) {
                category = "Underweight";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = "Normal weight";
            } else if (bmi >= 25 && bmi < 29.9) {
                category = "Overweight";
            } else {
                category = "Obesity";
            }
        } else { // Children and teenagers categories
            if (gender === "male") {
                if (bmi < 17) {
                    category = "Underweight";
                } else if (bmi >= 17 && bmi < 23) {
                    category = "Normal weight";
                } else if (bmi >= 23 && bmi < 27) {
                    category = "Overweight";
                } else {
                    category = "Obesity";
                }
            } else {
                if (bmi < 16.5) {
                    category = "Underweight";
                } else if (bmi >= 16.5 && bmi < 22.5) {
                    category = "Normal weight";
                } else if (bmi >= 22.5 && bmi < 26.5) {
                    category = "Overweight";
                } else {
                    category = "Obesity";
                }
            }
        }

        let resultMessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category:'+category;
        
        resultElement.innerHTML = resultMessage;
    }
})