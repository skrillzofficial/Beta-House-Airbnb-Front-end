import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import signup from "../assets/sign-up.png";
import google from "../assets/🦆 icon _google_.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberme: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://beta-house-airbnb-backend.onrender.com/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Save token and user data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // If remember me is checked, store credentials
        if (formData.rememberme) {
          localStorage.setItem("rememberedEmail", formData.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        console.log("Login successful:", data);
        navigate("/profile");
      } else {
        setError(
          data.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Check for remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: rememberedEmail,
        rememberme: true,
      }));
    }
  }, []);

  return (
    <div className="container w-11/12 mx-auto min-h-screen flex flex-col lg:flex-row">
      {/* Form Section */}
      <div className="w-full lg:w-2/5 bg-white flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            Welcome Back to BetaHouse!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Let's get started by filling out the information below
          </p>

          {/* Error message */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="py-2 px-3 text-sm block w-full border-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your Email"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="py-2 px-3 pr-10 text-sm block w-full border-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your password"
                  disabled={loading}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-start pt-1">
                <input
                  name="rememberme"
                  type="checkbox"
                  checked={formData.rememberme}
                  onChange={handleChange}
                  className="h-4 w-4 mt-0.5 border-gray-300 cursor-pointer rounded text-green-600 focus:ring-green-500 accent-green-600"
                  disabled={loading}
                />
                <p className="ml-2 text-sm text-gray-600 leading-4">
                  Remember Me
                </p>
              </div>
              <div>
                <p className="text-sm text-red-500 hover:text-red-600">
                  Forgot password
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center cursor-pointer py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                disabled={loading}
                className="w-full inline-flex justify-center py-2.5 px-4 border rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                <div className="flex gap-2 cursor-pointer items-center">
                  <div className="w-4 h-4 rounded-sm flex items-center justify-center text-xs">
                    <img src={google} alt="Google" />
                  </div>
                  <p>Continue with Google</p>
                </div>
              </button>
            </div>

            <div className="mt-4">
              <div className="flex gap-1 items-center justify-center text-center">
                <p className="text-sm text-gray-600">New User?</p>
                <Link to="/Signup">
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex lg:w-3/5">
        <div className="flex relative items-center justify-center bg-gray-100 w-full">
          <img src={signup} alt="Signup" />
          <Link to="/">
            <div className="absolute top-5 left-10 flex gap-2 items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <p className="text-white text-sm font-bold">BH</p>
              </div>
              <p className="font-medium text-white">BetaHouse</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
