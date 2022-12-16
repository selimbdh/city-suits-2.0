import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";


const Login = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const routes = useRouter();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: React.FormEvent) {
    try {
      event.preventDefault();

      const user = await axios.post("http://localhost:4000/api/users/login", {
        email,
        password,
      });

      if (user) {
        console.log(user.data.id);
        localStorage.setItem("token", user.data.token);
        localStorage.setItem("id", user.data.id);
        await routes.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="body">
        <div className="container justify-content-center ">
          <div>
            <div className="row h-100 col-sm-7   ">
              <div className="form-login">
                <br />
                <h4 className="h4 text-blueGray-500 text-blueGray-800 ">Sign In</h4>
                <br />
                <input
                  type="text"
                  id="userName"
                  className="form-control input-sm chat-input"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  id="userPassword"
                  className="form-control input-sm chat-input"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <div className="wrapper">
                  <button
                    className="btn btn-blueGray-800 "
                    type="submit"
                    disabled={!validateForm()}
                    onClick={()=>{location.href="/"}}
                  >
                    Login
                  </button>

                </div>
                <Link href="/register" >
                <div >
                  <p className="text-warning">Sign Up</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
};

export default Login;
