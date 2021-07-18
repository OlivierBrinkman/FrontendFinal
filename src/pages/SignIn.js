import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import Session from "../components/Session";

function SignIn  () {

    const { handleSubmit , register} = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const [session, setSession] = useState(Session.getSession());
    let history = useHistory();

    useEffect(() => {
        if(session !== null) {
            history.push("/profile")
        }
    });


    async function onSubmit(data) {  
        if(data.username === "" || data.password === "") {
         alert("all fields are mandatory");
        }
        else {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({username: data.username, password : data.password})
            };
            fetch("https://polar-lake-14365.herokuapp.com/api/auth/signin", requestOptions)
                .then(async response => {
                    const isJson = response.headers.get("content-type").includes("application/json");
                    const data = isJson && await response.json();
                    if(response.ok) {
                        Session.setSession(JSON.stringify(data));   
                        window.location.reload(); 
                    }
                    else {
                        setErrorMessage("Invalid credentials")
                    }
                })
                .catch(error=> {
                    console.log(error);
                    setErrorMessage(error);
                });   
        }
    }

    return (
        <>
        <div className="auth-form">
                <h1>Sign in</h1> 
                <span className="error-message">{errorMessage}</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username-field">
                        Username
                        <input className="form-input" type="text" id="username-field" name="username"  {...register("username")} />
                    </label>
                    <label htmlFor="password-field">
                        Password
                        <input className="form-input" type="password" id="password-field" name="password"   {...register("password")} /> 
                    </label>
                    <button type="submit" className="auth-button"> Sign In </button>
                </form>
               
            </div>
            <Link  className="signup-signin-redirect-text" to="/signup">
                <div className="signup-signin-redirect">
                    <span>Sign up here</span> 
                </div>
            </Link>
            </>
    )
}

export default SignIn;