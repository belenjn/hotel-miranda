const submitButton = document.getElementsByClassName("button")[0];

const firstName = document.getElementsByClassName("fname")[0];
const lastName = document.getElementsByClassName("lname")[0];
const subject = document.getElementsByClassName("subject")[0];

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (firstName.value === "" || lastName.value === "" || subject.value === "")
    swal("Please complete all fields in the form", "", "error");
  else {
    swal("Your request has been processed successfully", "", "success").then(
      (result) => {
        if (result) {
          firstName.value = "";
          lastName.value = "";
          subject.value = "";
        }
      }
    );
  }
});
