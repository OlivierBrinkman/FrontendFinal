import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

function SignUp() {

    const { handleSubmit, register } = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const [confirmationMessage, setConfirmationMessage] = useState("");
    let history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("session") !== null) {
            history.push("/profile")
        }
    });

   async function onSubmit(data) {
        if(data.username === "" || data.email === "" || data.password === ""){
            setErrorMessage("All fields are mandatory")
        }
        else {
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({username: data.username, email : data.email, password : data.password, role: ["user"]})
            };
           await fetch("https://polar-lake-14365.herokuapp.com/api/auth/signup", requestOptions).then(async response => {
                const isJson = response.headers.get("content-type").includes("application/json");
                const data = isJson && await response.json();
                    var error;
                    if(!response.ok) {
                        error = (data && data.message) || response.status;
                        console.log(error)
                        setErrorMessage(error)
                        return Promise.reject(error);
                    }
                    setConfirmationMessage("Your account has been created successfully, you will be redirect to the sign in page soon. ");
                    setTimeout(function(){history.push("/signin")}, 4000);
            })
            .catch(error => {
                setErrorMessage(error);    
                return error;
            });  
        }
    }

    return (  
        <div>
            <div className="confirmation-toast">
                <span>{confirmationMessage}</span>
            </div>
            <div className="auth-form signup-form">
                <h1>Sign Up</h1>
                <span className="error-message">{errorMessage}</span>
                <form onSubmit={handleSubmit(onSubmit)}  autoComplete="off">
                    <label htmlFor="username-field">
                            Username
                            <input className="form-input" type="text" id="username-field" name="username"  {...register("username")} />
                        </label>
                        <label htmlFor="email-field">
                            Email
                            <input className="form-input" type="email" id="email-field" name="email"  {...register("email")} />
                        </label>
                        <label htmlFor="password-field">
                            Password
                            <input className="form-input" type="password" id="password-field" name="password"  {...register("password")}/> 
                        </label>
                        <button type="submit" className="auth-button"> Sign Up</button>
                </form>
            </div>
            <Link  className="signup-signin-redirect-text" to="/signin">
                <div className="signup-signin-redirect">
                    <span>Sign in here</span> 
                </div>
            </Link>
        </div>
    )
}
export default SignUp