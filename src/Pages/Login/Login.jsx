import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <h1 className="text-2xl text-center font-bold">Login Now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
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
          <button className="btn btn-primary">Login</button>
        </div>
        <p>
          Dont't have an account?{" "}
          <Link
            className="text-blue-600 hover:underline duration-1000-1000"
            to="/login"
          >
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
