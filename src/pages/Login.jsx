import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setMessage("No account found. Redirecting to Signup...");
      setTimeout(() => navigate("/signup"), 1000);
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      setMessage("Login successful!");
      setTimeout(() => navigate("/"), 1000);
    } else {
      setMessage("Incorrect email or password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="card shadow p-5 animated-border" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-3" style={{ color: "#271300", fontFamily: "cursive", fontWeight: "bold" }}>
          Login
        </h3>
        {message && (
          <div className={`alert ${message.includes("successful") ? "alert-success" : "alert-warning"}`} role="alert">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#524232",
                color: "white",
                width: "30%",
              }}
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-3 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-decoration-none">Signup here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
