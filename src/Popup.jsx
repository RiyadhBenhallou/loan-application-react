

export default function Popup({ isOpen, setIsOpen, formData, setFormInput, isDarkMode }){

  if (!isOpen) return null;

  function handlePopUpClick() {
    const { name, email, mobile, age, averageWage } = formData;
    if ((name == "") || (email == "") || (mobile == "") || (age == "") || (averageWage == "") || parseInt(age) < 22 || parseInt(age) > 70) {
      setIsOpen(!isOpen)
    } else {
      setFormInput({
                    name: "",
                    email: "",
                    mobile: "",
                    age: "",
                    isEmployee: false,
                    averageWage: "",
                  })
      setIsOpen(!isOpen)
    }
    
  }
  return (
    <div onClick={handlePopUpClick} className="flex items-center justify-center fixed w-full h-screen bg-[rgb(0,0,0,0.5)]">
    <div className="bg-white dark:bg-slate-900 dark:text-white flex-col p-4 rounded-lg">
      <Message formData={formData} />
    </div>
    </div>
  )
}

function Message({ formData }) {
  const { name, email, mobile, age, averageWage } = formData;
    if((name == "") || (email == "") || (mobile == "") || (age == "") || (averageWage == "")) {
      return(
        <div className="flex sapce-x-6 justify-center items-center phone:w-80">
          <img src="https://static.vecteezy.com/system/resources/previews/017/178/088/original/red-hazard-warning-sign-on-transparent-background-free-png.png" alt="" className="w-24 h-24 mr-5" />
          <div className="flex flex-col space-y-1">
              <h1 className="text-red-500 font-bold">Please enter credentials</h1>
            <p className="text-gray-400 text-sm font-medium max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
        </div>
      )
    } else if(parseInt(age) < 22 || parseInt(age) > 70) {
      return(
        <div className="flex sapce-x-6 justify-center items-center phone:w-80">
          <img src="https://static.vecteezy.com/system/resources/previews/017/178/088/original/red-hazard-warning-sign-on-transparent-background-free-png.png" alt="" className="w-24 h-24 mr-5" />
          <div className="flex flex-col space-y-1">
              <h1 className="text-red-500 font-bold">Please enter a valid age</h1>
            <p className="text-gray-400 text-sm font-medium max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
        </div>
      )
    } else {
      return(
        <div className="flex sapce-x-6 justify-center items-center phone:w-80">
          <img src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" alt="" className="w-24 h-24 mr-5" />
          <div className="flex flex-col space-y-1">
              <h1 className="text-green-400 font-bold">Thank you for taking the survey</h1>
            <p className="text-gray-500 text-sm font-medium max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
        </div>
      )
    }
}


