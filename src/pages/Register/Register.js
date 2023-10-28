

import { useNavigate } from 'react-router-dom';
import './Register.css'

    function Register(){

       const navigate = useNavigate();

        function handleFormSubmit(){

            navigate("/Login");

        }


        return(
            <div className="box">
            <div className="register-form">

                <h3 className='header'>REGISTER</h3> 
                <hr/>
                <form onSubmit={handleFormSubmit} action="">
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Email</label>
                        <input className="form-control" type="email" />

                    </div>

                    <div className="row">

                    <div className="mb-3 col-6">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input className="form-control" type="Text" />

                    </div>

                    <div className="mb-3 col-6">
                        <label htmlFor="" className="form-label">Last Name</label>
                        <input className="form-control" type="Text" />

                    </div>

                    </div>

                   

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Username</label>
                        <input className="form-control" type="Text" />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input className="form-control" type="Password" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input className="form-control" type="Number" />

                    </div>

                    <h5>Address</h5>

                    <div className="row">
                    <div className="mb-3 col-6 ">
                        
                        <input placeholder='Flat No' className="form-control" type="Number" />

                    </div>

                    <div className="mb-3 col-6 ">
                        
                        <input placeholder='City' className="form-control" type="Text" />

                    </div>
                    <div className="mb-3 col-6">
                        
                        <input placeholder='Street' className="form-control" type="Text" />

                    </div>
                    <div className="mb-3 col-6">
                        
                        <input placeholder='Zipcode' className="form-control" type="Number" />

                    </div>


                    </div>
                    <div className='register'>
                    <button type='Submit' className="btn btn-success">Register</button>
                    </div>
                    

                </form>

        </div>
        </div>
        );
        

    }

    export default Register ;