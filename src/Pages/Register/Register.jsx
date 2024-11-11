import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from './../../components/AuthProvider/AuthProvider';

const Register = () => {
  const navigate = useNavigate()
    const {createUser} = useContext(AuthContext)
    // console.log(createUser)

    const handleRegister = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        const name = e.target.name.value
        console.log(name, email, password)

        createUser(email, password)
        .then((result)=>{
          console.log(result)
          e.target.reset()
          navigate('/')
        })
        .catch(error=>{
          console.log('ERROR', error.message)
        })

    }

  return (
    
     <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
     <form onSubmit={handleRegister} className="card-body">
       <h1 className="text-2xl text-center font-bold">Register Now</h1>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input
           type="text"
           placeholder="name"
           name="name"
           className="input input-bordered"
           required
         />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input
           type="email"
           name="email"
           placeholder="email"
           className="input input-bordered"
           required
         />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input
           type="password"
           name="password"
           placeholder="password"
           className="input input-bordered"
           required
         />
         <label className="label">
           <a href="#" className="label-text-alt link link-hover">
             Forgot password?
           </a>
         </label>
       </div>
       <div className="form-control mt-6">
         <button className="btn btn-primary">Register</button>
       </div>
       <p>
         Dont't have an account?{" "}
         <Link
           className="text-blue-600 hover:underline duration-1000-1000"
           to="/login"
         >
           Login Now
         </Link>
       </p>
     </form>
   </div>
  );
};

export default Register;
