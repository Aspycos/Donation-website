
    const form = document.getElementById('donation-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        // Process the donation amount, e.g., send it to a payment gateway
        /*console.log*/ /*alert*/ ('Donation amount:', amount); // this two comments at the beginning of the line are just bascially methods to see the results of your code so you can uncomment one if you want to but now two otherwise it will just show you errors
    });
