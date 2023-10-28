import { useNavigate } from "react-router-dom";
import "./Login.css" ;

    function Login(){

            const navigate = useNavigate();

        function handlelogin(){

            navigate("/");

        }


        return(
            <div className="container">
               <form onSubmit={handlelogin} className="login-form" action="">

                <h3>Login</h3>
                <hr />

                <div className="mb-3">
                <label className="form-label" htmlFor="">Email</label>
                <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label" htmlFor="">Password</label>
                <input type="password" className="form-control" />
                </div>
                
                <button type="Submit" className="btn btn-primary signin"> Sign In</button>
               </form>
            </div>

        );
    }

    export default Login ;