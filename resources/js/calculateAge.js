// JavaScript to calculate and update the age
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Check if the birthday has occurred this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
}

const birthDate = new Date('1983-12-20');
const ageElement = document.getElementById('age');
ageElement.textContent = calculateAge(birthDate);