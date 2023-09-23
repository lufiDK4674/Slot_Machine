function verifyAge(event) {
  // var age = prompt("Are you 18 years or older? (Yes/No)").toLowerCase();

  // if (age === "yes") {
  //   return "slot_machine.html";
  // } else {
  //   return "not_allowed.html";
  // }

  event.preventDefault();

  const myCheck = document.getElementById("ageCheck");
  console.log(myCheck.checked)

  const name = document.getElementById("playerName");
  const points = document.getElementById("playerPoints");

  // console.log(name.value);
  // console.log(points.value);

  if((name.value !== "") && (points.value >= 10000) && (myCheck.checked)) {
    open("slot_machine.html");
  } else {
    if(name.value === "" || points.value < 10000 || points.value === "")
    alert("Enter valid details.")
    else if(!myCheck.checked)
    alert("You are not eligible.")
  }

}

// console.log(typeof verifyAge()); // "function"

const detailsForm = document.querySelector("#details-form");

if (detailsForm) {
  detailsForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Call the verifyAge() function
    var redirectUrl = verifyAge();

    // Redirect to the appropriate page
    window.location.href = redirectUrl;
  });
}

