let generateBtn = document.querySelector("#generateBtn");
let qrInput = document.querySelector("#qrInput");
let qrBox = document.querySelector("#qrBox");
let qrImage = document.querySelector("#qrImage");
let errorMessage = document.querySelector("#errorMessage");

generateBtn.addEventListener("click", function () {
    let input = qrInput.value.trim();  // Get trimmed input

    if (input === "") {
        // If input is empty
        errorMessage.classList.remove("hidden");  // Show error
        qrImage.classList.add("hidden");          // Hide image if any
        qrImage.src = "";                         // Clear QR image
        return;
    }

    // If input is valid
    errorMessage.classList.add("hidden");         // Hide error
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(input)}`;
    qrImage.classList.remove("hidden");           // Show QR image
});
