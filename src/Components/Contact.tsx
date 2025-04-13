import textLogo from "../assets/home-bg.jpg"

const Contact = () => {
    return (
        <div className="relative w-full h-[700px]">
            <img 
                src={textLogo}
                alt="Background" 
                className="w-full h-full object-cover"
            />


            <div className="absolute top-1/5 left-1/12 bg-[#111827] shadow-lg">
                <Form />
            </div>
        </div>
    );
};
const Form = () => {
    return (
      <form className="max-w-md mx-auto p-10 w-[1000px]">
        <div className="text-white text-3xl mb-10">GET IN TOUCH</div>
        {/* Email */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
              dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
              focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
  
        {/* fullname */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="fullname"
            name="floating_fullname"
            id="floating_fullname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
              dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
              focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_fullname"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>

        {/* phonenumber */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="phonenumber"
            name="floating_phonenumber"
            id="floating_phonenumber"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
              dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
              focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phonenumber"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>

        {/* company */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="company"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
              border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
              dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
              focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
              peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
              peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company Name
          </label>
        </div>
  
       
        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
            w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 
            dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    );
  };
  


export default Contact;
