function buttonSubmit(event) {
    event.preventDefault(); // skickar inte formen^^

    let namn = document.getElementById("namn").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let meddelande = document.getElementById("meddelande").value; 

    console.log(namn, " har skickat in en offert!")
    console.log("Namn:", namn);
    console.log("E-post:", email);
    console.log("Telefonnummer:", phone);
    console.log("Meddelande:", meddelande);

}