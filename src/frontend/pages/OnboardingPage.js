import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // For making HTTP requests

// Onboarding Steps
const onboardingSteps = [
  {
    title: "Personal Information",
    fields: [
      { label: "Name", type: "text", placeholder: "Enter your name" },
      { label: "Email", type: "email", placeholder: "Enter your email" },
      { label: "Password", type: "password", placeholder: "Create a password" },
      {
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
      },
    ],
  },
  {
    title: "Additional Details",
    fields: [
      { label: "Address", type: "text", placeholder: "Enter your address" },
      { label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
      { label: "Age", type: "number", placeholder: "Enter your age" },
    ],
  },
  {
    title: "Financial Details",
    fields: [
      {
        label: "Monthly Income (INR)",
        type: "number",
        placeholder: "Enter your monthly income",
      },
      {
        label: "Current Savings (INR)",
        type: "number",
        placeholder: "Enter your current savings",
      },
      {
        label: "Risk Tolerance",
        type: "select",
        options: ["High", "Medium", "Low"],
      },
    ],
  },
  {
    title: "Investment Goals",
    fields: [
      {
        label: "Goal",
        type: "select",
        options: [
          "Saving for retirement",
          "Buying a house",
          "Saving for education",
          "Purchasing for self",
          "Starting a business",
          "Planning a vacation",
        ],
      },
      {
        label: "Target Amount (INR)",
        type: "number",
        placeholder: "Enter target amount",
      },
      {
        label: "Timeframe (years)",
        type: "number",
        placeholder: "Enter timeframe",
      },
      {
        label: "Financial Literacy (Scale 1 to 5)",
        type: "select",
        options: ["1", "2", "3", "4", "5"],
      },
    ],
  },
];

const SignupPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    Gender: "",
    RiskTolerance: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const handlePasswordChange = (value) => {
    setFormData({ ...formData, password: value });
    const strength = Math.min(value.length * 10, 100);
    setPasswordStrength(strength);
  };

  const validateStep = () => {
    const currentStepFields = onboardingSteps[step].fields;
    const newErrors = {};

    currentStepFields.forEach((field) => {
      if (
        !formData[field.label] &&
        (field.label !== "Password" || !formData.password)
      ) {
        newErrors[field.label] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = async () => {
    if (!validateStep()) return;

    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      try {
        // Manually encode the values before submitting the form
        const encodedFormData = {
          ...formData,
          Goal:
            formData.Goal === "Saving for retirement"
              ? 0
              : formData.Goal === "Buying a house"
              ? 1
              : formData.Goal === "Saving for education"
              ? 2
              : formData.Goal === "Purchasing for self"
              ? 3
              : formData.Goal === "Starting a business"
              ? 4
              : formData.Goal === "Planning a vacation"
              ? 5
              : formData.Goal, // Encoding Goal

          Gender:
            formData.Gender === "Female"
              ? 0
              : formData.Gender === "Male"
              ? 1
              : formData.Gender === "Other"
              ? 2
              : formData.Gender, // Encoding Gender

          RiskTolerance:
            formData.RiskTolerance === "High"
              ? 0
              : formData.RiskTolerance === "Medium"
              ? 1
              : formData.RiskTolerance === "Low"
              ? 2
              : formData.RiskTolerance, // Encoding Risk Tolerance

          age: parseInt(formData.age), // Ensure age is an integer
          monthly_income: parseFloat(formData.monthly_income), // Ensure monthly income is numeric
          current_saving: parseFloat(formData.current_saving), // Ensure current savings is numeric
          financial_literacy: parseInt(formData.financial_literacy), // Ensure literacy is integer
        };

        const response = await axios.post(
          "https://ai-investment-backend-ozm7.onrender.com/api/onboarding",
          encodedFormData
        );
        if (response.data.success) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again.");
      }
    }
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const progress = ((step + 1) / onboardingSteps.length) * 100;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F8A8C8] to-[#FDCEDF] p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-6">
          <div className="w-full bg-[#FDCEDF] rounded-full h-2.5">
            <div
              className="bg-[#E85A9C] h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-[#4A4A4A] mt-2">
            Step {step + 1} of {onboardingSteps.length}
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-6 text-center">
          {onboardingSteps[step].title}
        </h2>

        {onboardingSteps[step].fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-[#4A4A4A] mb-1">
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                className="w-full p-2 border border-[#FDCEDF] rounded focus:outline-none focus:border-[#E85A9C]"
                value={formData[field.label] || ""}
                onChange={(e) => handleInputChange(field.label, e.target.value)}
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.label === "Password" ? (
              <>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData.password || ""}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  className="w-full p-2 border border-[#FDCEDF] rounded focus:outline-none focus:border-[#E85A9C]"
                />
                <div className="w-full bg-[#FDCEDF] rounded-full h-2 mt-2">
                  <div
                    className="bg-[#E85A9C] h-2 rounded-full"
                    style={{ width: `${passwordStrength}%` }}
                  ></div>
                </div>
                <p className="text-xs text-[#4A4A4A] mt-1">
                  Password Strength: {passwordStrength}%
                </p>
              </>
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.label] || ""}
                onChange={(e) => handleInputChange(field.label, e.target.value)}
                className="w-full p-2 border border-[#FDCEDF] rounded focus:outline-none focus:border-[#E85A9C]"
              />
            )}
            {errors[field.label] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.label]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-between mt-6">
          {step > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePreviousStep}
              className="bg-[#E85A9C] text-white py-2 px-4 rounded hover:bg-[#D14A8C] transition-colors"
            >
              Back
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextStep}
            className="bg-[#E85A9C] text-white py-2 px-4 rounded hover:bg-[#D14A8C] transition-colors ml-auto"
          >
            {step === onboardingSteps.length - 1 ? "Get Started" : "Next"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
