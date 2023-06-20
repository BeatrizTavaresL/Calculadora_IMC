const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value.replace("," , ".");

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById('value')
  let description = '';

  document.getElementById('infos').classList.remove('hidden');

     console.log(bmi)
if (bmi < 18.5) {
     description = "Cuidado! Você está abaixo do peso!"
} else if ( bmi >= 18.5 && bmi <= 25.0) {
     description = "Você está no peso ideal!";  
} else if (bmi > 25 && bmi <= 30) {
     description = "Cuidado! Você está sobrepeso!";
     value.classList.add('attention');
} else if (bmi > 30 && bm1 <= 35) {
     description = "Cuidado! Você está com obesidade moderada!"; 
     value.classList.add('attention');
} else if (bmi > 35 && bmi <= 40) {
     description = "Cuidado! Você está com obesidade severa!"; 
     value.classList.add('attention');
} else {
     description = "Cuidado! Você está com obesidade morbida!"; 
     value.classList.add('attention');
}


value.textContent = bmi
document.getElementById('description').textContent = description;

});