import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function App() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    isEmployee: false,
    averageWage: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const options = [
    {icon: "sunny", text: "light"},
    {icon: "moon", text: "dark"},
  ]

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    console.log(formInput);
    setIsOpen(!isOpen);
    e.preventDefault();
  }

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
    }
  }, [theme])
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-400 relative">

      <div className="fixed top-4 right-4 dark:bg-slate-900 bg-white rounded-lg">
      {options.map(opt => {
        return (
            <button key={opt.text} className={`w-8 h-8 m-1 rounded-lg leading-9 text-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 ${theme === opt.text && 'text-yellow-600 dark:text-blue-500' }`}
              onClick={() => setTheme(opt.text)}
              >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
        )
      })}
        </div>


      
      <div className="p-8 rounded-lg bg-white shadow-xl w-96 phone:w-5/6 dark:bg-slate-900 dark:text-gray-400">
        <h1 className="text-center font-bold text-4xl phone:text-3xl font-mono dark:text-white">Apply for a loan</h1>
        <div className="flex justify-center mb-8 mt-1">
          <p className="text-gray-400 text-xs text-center max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            value={formInput.name}
            onChange={handleInputChange}
            name="name"
            type="text"
            className="border p-2 rounded-lg placeholder:text-sm focus:outline-none dark:placeholder-text-white dark:bg-slate-700 dark:border-slate-700 dark:text-white"
            placeholder="Enter your name"
          />

          <input
            value={formInput.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            className="border p-2 rounded-lg placeholder:text-sm focus:outline-none dark:placeholder-text-white dark:bg-slate-700 dark:border-slate-700 dark:text-white"
            placeholder="Enter your email"
          />

          <input
            value={formInput.mobile}
            onChange={handleInputChange}
            name="mobile"
            type="tel"
            className="border p-2 rounded-lg placeholder:text-sm focus:outline-none dark:placeholder-text-white dark:bg-slate-700 dark:border-slate-700 dark:text-white"
            placeholder="Enter your phone number"
          />

          <input
            value={formInput.age}
            onChange={handleInputChange}
            name="age"
            type="number"
            className="border p-2 rounded-lg placeholder:text-sm focus:outline-none dark:placeholder-text-white dark:bg-slate-700 dark:border-slate-700 dark:text-white"
            placeholder="Enter your age"
          />

          <div className="flex text-center justify-center items-center">
            <input
              type="checkbox"
              checked={formInput.isEmployee}
              onChange={(e) =>
                setFormInput({ ...formInput, isEmployee: e.target.checked })
              }
              className="mr-1 accent-[#FFA500]"
            />
            <label className="text-sm">An employee</label>
          </div>

          <select
            className="border p-2 rounded-lg placeholder:text-sm focus:outline-none text-sm dark:placeholder-text-white dark:bg-slate-700 dark:border-slate-700 dark:text-white"
            value={formInput.averageWage}
            onChange={handleInputChange}
            name="averageWage"
          >
            <option disabled hidden value="">Select your average wage</option>
            <option>50.000$</option>
            <option>100.000$</option>
          </select>

          <button
            type="submit"
            className="bg-[#FFA500] border-2 border-[#FFA500] hover:text-[#FFA500] hover:bg-white font-bold duration-150 text-white p-1 rounded-lg hover:bg-opacity-70 flex items-center justify-center space-x-3 dark:hover:bg-slate-900 dark:text-slate-900"
          >
            <ArrowCircleRightIcon />
            <span>Submit</span>
          </button>
        </form>
      </div>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} formData={formInput} setFormInput={setFormInput} />
      
    </div>

  );
}