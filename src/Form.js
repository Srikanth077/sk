
import React, { useEffect, useState } from "react";
import ImageUpload from './Image'
import Phone from './Phone'







function RegistrationView() {
  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber:"",
    dob:"",
    file:""
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber:"",
    dob:"",
    file:""
  });
  


  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
    
  }


  

  const checkValidation = () => {
    let errors = validation;
    

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = "First name is required*";
    } else {
      errors.fName = "";
    }
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "Last name is required*";
    } else {
      errors.lName = "";
    }

    // email validation
    
     if (!inputValues.email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)) {
      errors.email = "Please enter a valid email address*";
    } else {
      errors.email = " ";
    }

    //password validation
   
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required*";
    } else if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-]).{6,}$/ )) {
      errors.password = "Password is Weak. It should contain One Uppercase, Lowercase, Number, Special Character*";
    } else  {
      errors.password = " "
    }

    //matchPassword validation
     if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = " Password does not match confirmation password*";
    } else {
      errors.confirmPassword = "  "
      
     
    }

    //Phone number validation
    
    
    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setInputValue)

  };
  
  function myfun1() {
    var input_dom = document.getElementById("uname");
    var span_dom = document.getElementById("uname_span");
    var meter_dom = document.getElementById("uname_meter");
  
    span_dom.innerHTML = input_dom.value.length;
    meter_dom.value = input_dom.value.length;
  }
   
  

  return (<>
   <body>
    <label className="pop"> Movies Hub</label>
    <div className="container">
    <h2>User Registration</h2>
      <div className="sign-up-form">
        <form
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
          required
        >
          <div className="form-control">
          <label>First Name :</label>
            <input
              placeholder="First Name"
              type="string"
              name="fName"
              id="fName"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.fName}
              required
            />
            {validation.fName && <p>{validation.fName}</p>}
            {validation.fName && console.log(validation)}
          </div>
          <div className="form-control">
        <label>Last Name :</label>
            <input
              placeholder="Last Name"
              type="string"
              id="lName"
              name="lName"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.lName}
              required
            />
            {validation.lName && <p>{validation.lName}</p>}
          </div>
          <div className="form-control">
          <label>Email :</label>
            <input
              placeholder="email"
              type="email"
              name="email"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.email}
              required
            />
          </div>
          {validation.email && <p>{validation.email}</p>}

          <div className="form-control">
          <label>Password :</label>
            <input
              placeholder="password"
              type="password"
              id="pwd"
              name="password"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.password}
              required
            />
            {validation.password && <p>{validation.password}</p>}
          </div>
          <div className="form-control">
          <label>Confirm Passowrd :</label>
            <input
              placeholder="confirm password"
              type="password"
              id="cnfpwd"
              name="confirmPassword"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword}
              required
            />
            {validation.confirmPassword && <p>{validation.confirmPassword}</p>}
          </div>
          <div className="form-control">
          <label>Phone Number :</label> 
          
          <Phone  
              required />
              </div>
          
          <div className="form-control">
          <label>Date of Birth :</label>
            <input
              placeholder="  "
              type="Date"
              name="dob"
              className="input-field"
              id="dob"
              required
            />
            </div>
            <div className="form-control">
          <label>Address :</label>
            <textarea
              placeholder="  "
              type="string"
              name="address"
              className="input-field"
              maxlength="400" 
              id="uname"
              onKeyUp={myfun1}
              required
            />
            <div className="d-block">
                 <span id="uname_span">0</span>/400
                     </div>
                     <meter id="uname_meter"  max="400" min="0" value=""class="form-control" ></meter>
            </div>
            <div>
            <label>Upload Image :</label>
             <ImageUpload  id="photo"/>
             </div>
          <button type="submit" id="submit-button"  onClick={(e) => handleChange(e)}>
            submit
          </button>
          <div className="form-input-login">
            Already have an account? Login <a href=" ">here</a>
          </div>
        </form>
      </div>
    </div>
  </body>
    </>);
}


export default RegistrationView;