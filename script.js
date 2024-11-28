function beforesubmit() {
    // Select the input and output fields
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");

    // Check if a valid date is entered
    if (inputdate.value) {
        // Format the date to MM-DD-YYYY
        let date = new Date(inputdate.value);
        let formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getFullYear()}`;

        // Set the value to the hidden field
        outputdate.value = formattedDate;

        // Log for debugging
        console.log("Input Date:", inputdate.value);
        console.log("Formatted Date (MM-DD-YYYY):", formattedDate);
    } else {
        console.error("Lead Date is not provided.");
    }
}
