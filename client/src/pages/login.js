import React from "react";

function Login() {
  return (
    <div>
      <div class="container">
        <div class="notification">
          <h1>Login Form</h1>
        </div>
      </div>

      <br/>
      <div class="container">
        <div class="startbar" action="/action_page.php">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email" name="email"/>
          <label for="pwd">Password:</label>
          <input type="password" id="pwd" placeholder="Enter password" name="pswd"/>
          <button type="submit">Submit</button>
          <p>Or Signup <a href="calendar.html">here</a></p>
        </div>
      </div>
      <br/>
      <br/>
      <div>
        <img src="images/_4REuQH4_400x400.jpg" alt="animalcrossing" class="center"/>
      </div>
      <br/>
    </div>
  );
}

export default Login;