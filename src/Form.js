import "./mycss.css";
import { useState } from "react";
export default function Form() {
  var inputs = document.querySelectorAll('#myForm input[type="text"]');
  var submitButton = document.getElementById("button");

  // Add event listener to each input field
  inputs.forEach(function (input) {
    input.addEventListener("keyup", checkAllFieldsFilled);
  });
  const [showAlertAge, setShowAlertAge] = useState(false);
  const [showAlertPhone, setShowAlertPhone] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // document.addEventListener("DOMContentLoaded", function () {
  //   var form = document.getElementById("myForm");
  //   form.addEventListener("submit", function (event) {
  //     event.preventDefault(); // Prevent form submission
  //     // <div class="alert">The Form Has Be Submitted Successefully</div>;
  //     setShowAlert(true);
  //   });
  // });
  const handleSubmit = (event) => {
    let pattern = /\d{10}/;
    if (formInputs.age >= 18 && formInputs.age <= 100) {
      if (pattern.test(formInputs.phone)) {
        event.preventDefault();
        setShowAlert(true);
      } else {
        event.preventDefault();
        setShowAlertPhone(true);
      }
    } else {
      event.preventDefault();
      setShowAlertAge(true);
    }
  };
  const closeAlert = (event) => {
    event.preventDefault();
    setShowAlert(false);
  };
  const closeAlertAge = (event) => {
    event.preventDefault();
    setShowAlertAge(false);
  };
  const closeAlertPhone = (event) => {
    event.preventDefault();
    setShowAlertPhone(false);
  };
  function checkAllFieldsFilled() {
    // Check if all input fields have non-empty values
    var allFilled = true;
    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    // Enable or disable the submit button based on the condition
    submitButton.disabled = !allFilled;
  }

  const [formInputs, setFormInput] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployer: false,
    salary: "",
  });

  return (
    <div className="myform">
      <h1>Requesting a loan</h1>
      <hr></hr>
      <form id="myForm" onSubmit={handleSubmit}>
        <label for="fname">Name:</label>
        <br></br>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formInputs.name}
          onChange={(event) =>
            setFormInput({ ...formInputs, name: event.target.value })
          }
          required
        ></input>
        <br></br>
        <label for="phone">Phone Number:</label>
        <br></br>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formInputs.phone}
          onChange={(event) =>
            setFormInput({ ...formInputs, phone: event.target.value })
          }
          required
        ></input>
        <br></br>
        <label for="age">Age:</label>
        <br></br>
        <input
          type="text"
          id="age"
          name="age"
          value={formInputs.age}
          onChange={(event) =>
            setFormInput({ ...formInputs, age: event.target.value })
          }
          required
        ></input>
        <br></br>
        <label for="check">Are you an employer ?</label>
        <br></br>
        <input
          type="checkbox"
          id="check"
          name="check"
          checked={formInputs.isEmployer}
          onChange={(event) =>
            setFormInput({ ...formInputs, isEmployer: event.target.checked })
          }
          required
        ></input>
        <br></br>
        <label for="salary">Salary </label>
        <br></br>
        <select
          value={formInputs.salary}
          onChange={(event) =>
            setFormInput({ ...formInputs, salary: event.target.value })
          }
          required
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        <br></br>
        <input type="submit" value="Submit" id="button" disabled></input>
      </form>
      {showAlert && (
        <div className="alert">The Form Has Be Submitted Successefully</div>
      )}
      {showAlert && <div className="page-dimmed" onClick={closeAlert} />}

      {showAlertAge && <div className="alert2">Age is not allowed</div>}
      {showAlertAge && <div className="page-dimmed" onClick={closeAlertAge} />}

      {showAlertPhone && (
        <div className="alert2">Phone Number Format Is Incorrect</div>
      )}
      {showAlertPhone && (
        <div className="page-dimmed" onClick={closeAlertPhone} />
      )}
    </div>
  );
}
