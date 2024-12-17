// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Dark Mode';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Light Mode';
  }
});

// BMI Calculation
document.getElementById('calculate-btn').addEventListener('click', () => {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const result = document.getElementById('bmi-result');
  const category = document.getElementById('bmi-category');

  if (height > 0 && weight > 0) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    result.textContent = `Your BMI is ${bmi}`;

    // Determine BMI Category
    if (bmi < 18.5) {
      category.textContent = 'Category: Underweight';
      category.style.color = 'orange';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category.textContent = 'Category: Normal weight';
      category.style.color = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
      category.textContent = 'Category: Overweight';
      category.style.color = 'yellow';
    } else {
      category.textContent = 'Category: Obesity';
      category.style.color = 'red';
    }
  } else {
    result.textContent = 'Please enter valid height and weight!';
    category.textContent = '';
  }
});
