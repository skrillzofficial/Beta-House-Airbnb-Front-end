import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import signup from "../assets/sign-up.png"
import google from "../assets/🦆 icon _google_.png"

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container w-11/12 mx-auto min-h-screen flex flex-col lg:flex-row">
      {/* Form Section */}
      <div className="w-full lg:w-2/5 bg-white flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            Join our community of home seekers and explore the possibilities that await.
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Let's get started by filling out the information below
          </p>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="py-2 px-3 text-sm block w-full border-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="py-2 px-3 text-sm block w-full border-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="py-2 px-3 text-sm block w-full border-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your Email"
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
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="py-2 px-3 pr-10 text-sm block w-full border-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
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

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="mt-1 relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="py-2 px-3 pr-10 text-sm block w-full border-2 border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Confirm your password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start pt-1">
              <input
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 mt-0.5 border-gray-300 cursor-pointer rounded text-green-600 focus:ring-green-500 accent-green-600"
              />
              <p className="ml-2 text-xs leading-4">
                I agree to{" "}
                <span className="text-green-600 hover:text-green-700 cursor-pointer">Terms of Service</span> and{" "}
                <span className="text-green-600 hover:text-green-700 cursor-pointer">Privacy Policies</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSubmit}
                className="w-full flex justify-center cursor-pointer py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 "
              >
                Sign Up
              </button>
            </div>
          </div>

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
                className="w-full inline-flex justify-center py-2.5 px-4 border rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 "
              >
                <div className="flex gap-2 cursor-pointer items-center">
                  <div className="w-4 h-4 rounded-sm flex items-center justify-center text-xs"><img src={google} alt="" /></div>
                  <p>Continue with Google</p>
                </div>
              </button>
            </div>

            <div className="mt-4">
              <div className="flex gap-1 items-center justify-center text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?
                </p>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex lg:w-3/5">
        <div className="flex items-center justify-center bg-gray-100 w-full">
          <img src={signup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;