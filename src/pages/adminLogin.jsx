import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components";

const AdminLogin = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //link to admin home page

    console.log("Email: ", Email);
    console.log("Password: ", password);


    // fetch('/auth/admin/login', {  //replace with api url to send details
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: Email,
    //     password: password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response from the server
    //     console.log(data);
  
    //     // Redirect to the admin dashboard or home page if login is successful
    //     // window.location.href = '/adminHome';
    //   })
    //   .catch((error) => {
    //     // Handle errors
    //     console.error('Error:', error);
    //   });
  };
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  value={Email}
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
