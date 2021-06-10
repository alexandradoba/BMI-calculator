window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");

    let name = document.getElementById("name").value;

    let gender = document.getElementById("gender").value;
   

    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  


    else {
  
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);

        if (bmi < 18.5) result.innerHTML =
            `<span>${name}</span> | <span>${gender}</span> | BMI : <span>${bmi}</span> | Under Weight`;
  
        else if (bmi > 18.5 && bmi < 25) 
            result.innerHTML = 
                `<span>${name}</span> | <span>${gender}</span> | BMI : <span>${bmi}</span> | Normal`;

        else if (bmi > 25.0 && bmi < 30) 
            result.innerHTML = 
                `<span>${name}</span> | <span>${gender}</span> | BMI : <span>${bmi}</span> | Over Weight`;       
  
        else result.innerHTML =
                `<span>${name}</span> | <span>${gender}</span> | BMI : <span>${bmi}</span> | Obese`;
    }
}