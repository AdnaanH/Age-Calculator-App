// Get the required elements from the DOM
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const errorDay = document.getElementById('error_day');
const errorMonth = document.getElementById('error_month');
const errorYear = document.getElementById('error_year');
const yearsOutput = document.getElementById('years');
const monthsOutput = document.getElementById('months');
const daysOutput = document.getElementById('days');

// Add event listeners to calculate age
dayInput.addEventListener('input', calculateAge);
monthInput.addEventListener('input', calculateAge);
yearInput.addEventListener('input', calculateAge);

// Function to calculate the age
function calculateAge() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Month is zero-based
  const currentDay = new Date().getDate();

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Validate the input
  let isValid = true;

  if (isNaN(day) || day < 1 || day > 31) {
    errorDay.textContent = 'Invalid day';
    isValid = false;
  } else {
    errorDay.textContent = '';
  }

  if (isNaN(month) || month < 1 || month > 12) {
    errorMonth.textContent = 'Invalid month';
    isValid = false;
  } else {
    errorMonth.textContent = '';
  }

  if (isNaN(year) || year > currentYear) {
    errorYear.textContent = 'Invalid year';
    isValid = false;
  } else {
    errorYear.textContent = '';
  }

  // Calculate the age if the input is valid
  if (isValid) {
    let years = currentYear - year;
    let months = currentMonth - month;
    let days = currentDay - day;

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
    }

    if (months < 0) {
      months += 12;
    }

    if (days < 0) {
      const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      days += daysInPreviousMonth;
      months--;
    }

    yearsOutput.textContent = years;
    monthsOutput.textContent = months;
    daysOutput.textContent = days;
  } else {
    yearsOutput.textContent = '--';
    monthsOutput.textContent = '--';
    daysOutput.textContent = '--';
  }
}
