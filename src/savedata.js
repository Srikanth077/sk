
// <div className="app">
//     <form>
//       <div className="form">
//         <div>
//           <h1>User Registration</h1>
//           <hr></hr>
//         </div>
//         <div >
//             <div >
//             <label for="fname">First Name:</label>
//             </div>
//         <input type="text" id="fname" name="firstname" placeholder="Enter your first name" className="form-control"></input>
//         </div>
//         <div >
//              <label for="lname">Last Name:</label>
//         </div>
//         <div >
//             <input type="text" id="lname" name="lastname" placeholder="Enter your last name" autofocus="" className="form-control"></input>
//          </div>
//          <div>
//             <label for="email">Email:</label>
//         </div>
//         <div>
//              <input type="email" id="email" name="email" placeholder="it should contain @,." autofocus="" className="form-control"></input>
//         </div>
//         <div >
//             <label for="password">Password:</label>
//          </div>
//          <div >
//            <input type="password" id="pwd"  name="password1" placeholder="Password here" autofocus="" onkeyup="myfun7()" className="form-control"></input>
//        </div>
//        <div >
//             <label for="password">Confirm Password:</label>
//         </div>
//         <div >
//             <input type="password"  id="cnfpwd" minlength="8"  placeholder="Confirm Password" className="form-control" ></input>
//          </div>
//          <div >
//              <label for="mobile">Mobile:</label>
//          </div>
//          <div>
//              <input name="phone" type="text" id="phone"   maxlength="10" className="form-control"/>
//         </div>
//         <div>
//             <label for="gender" required>Gender:</label>
//         </div>
//         <div>
//         <input type="radio" id="male" name="gender" value="male" className="radio"/>Male
//                     <input type="radio" id="female" name="gender" value="female"className="form-control"/>Female
//         </div>
//         <div>
//            <label for="dob">Date Of Birth:</label>
//         </div>
//         <div>
//         <input type="Date" id="dob" name="dob" required="" autofocus=""className="form-control"></input>
//         </div>
//         <div>
//              <label for="address">Address:</label>
//         </div>
//         <div>
//         <textarea type="text"  name="address" id="uname" onKeyUp={myfun} maxLength="400" className="form-control"></textarea>
        
//         </div>
//         <span id="uname_span">0</span>/400
//         <div>
//         <meter id="uname_meter"  max="400" min="0" value=""  className="form-control" ></meter>
//         </div>
//         <div>
//         <label >Select State :</label>
//         </div>
//         <div>
//         <select id="countrySelect" size="1"  className="state">
//                     <option value="" disabled selected>Choose State</option>
//                     <option>Telangana</option>
//                     <option>AP</option>
//                     </select>
//         </div>
//         <div>
//         <label>Select City :</label>
//         </div>
//         <div>
//         <select id="citySelect" size="1"  className="city">
//                     <option value="" disabled selected>Choose City</option>
//                     <option></option>
//                     </select>
//         </div>
//         <div>
//              <label for="pincode">Area PIN:</label>
//         </div>
//         <div>
//         <input type="number" id="pin" name="pin" maxlength="6" required="" autofocus="" className="pincode"></input>
//         </div>
//         <div>
//             <label>Upload Image :</label>
//         </div>
//         <div>
//         <input type="file" name="upload_file" className="image" id="photo" placeholder="Enter Name" ></input>
//         </div>
//         <br></br>
//         <div>
//         <input type="checkbox" value="agree" required="" autofocus="" className="sps"></input>
//              <span className="sp">I agree for the terms*  and Conditions*</span>
//         </div>
//         <br></br>
//         <div>
//         <button type="submit" className="sub" >Submit</button>
//      </div>
  

//       </div>
//     </form>
//     </div>