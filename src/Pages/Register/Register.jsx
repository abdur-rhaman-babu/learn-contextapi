import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="card bg-base-100 mx-auto mt-24 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <h1 className="text-2xl text-center font-bold">Register Now</h1>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>
          Aready have an account?{" "}
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
