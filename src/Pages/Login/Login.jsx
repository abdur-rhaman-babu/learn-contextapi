import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext)
    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(name, email, password)

        signInUser(email,password)
        .then((result)=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log('ERROR', error.message)
        })
    }
  return (
    <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
    <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-2xl text-center font-bold">Login Now</h1>
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
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
      <p>
        Aready have an account?{" "}
        <Link
          className="text-blue-600 hover:underline duration-1000-1000"
          to="/register"
        >
          Register Now
        </Link>
      </p>
    </form>
  </div>
  );
};

export default Login;
