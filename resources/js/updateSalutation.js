function updateSalutation() {
    const salutationElement = document.getElementById('salutation');
    const currentHour = new Date().getHours();
    let salutation = '';

    if (currentHour >= 5 && currentHour < 12) {
        salutation = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
        salutation = 'Good Afternoon!';
    } else {
        salutation = 'Good Evening!';
    }

    salutationElement.textContent = salutation;
}

// Call the function to update the salutation
updateSalutation();