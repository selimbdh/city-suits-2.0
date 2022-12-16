import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";



const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");


  const routes = useRouter();
  function validateForm() {
      return name.length > 0 && email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: React.FormEvent) {
      try {
          event.preventDefault();

          const user = await axios.post("http://localhost:4000/api/users/register", {
              name,
              email,
              password,
              phone
          });
              alert("Account has been created")
              routes.push("/");
        
      } catch (error) {
          console.log(error);
          // alert(error.response.data.message);
      }
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className='body'>
      
    
    <div className="container">
    <div >
        <div className="row h-100 col-sm-7 my-auto ">
              <div className="form-login">
                <br />
                <h4 className='h4'>Sign Up</h4>
                <br />
                <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username"  value={name} onChange={(e) => setName(e.target.value)}/>
                <br />
                <input type="text" id="email" className="form-control input-sm chat-input" placeholder="email"  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <input type="text" id="phone" className="form-control input-sm chat-input" placeholder="Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                <br />
                <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <div className="wrapper">
                        <button
                    className="btn btn-blueGray-800"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    register
                  </button>
                </div>
                <Link href="/login" >
                <div >
                  <p className="text-warning" >Sign In</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
    <br />
</div>
</div>
</form>
  )
}

export default Register