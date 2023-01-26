import { React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TherapistCreate() {
  const navigate = useNavigate();
  function createTherapitProfile(event) {
    event.preventDefault();
    navigate(`/thankyou/therapistThanks`);
  }
  return (
    <div>
      <section className="font-poppins py-6">
        <div className="max-w-7xl  px-5 mx-auto ">
          <form
            name="form"
            action=""
            className="flex flex-col max-w-fit"
            onSubmit={createTherapitProfile}
          >
            <h2 className="text-5xl uppercase leading-18 mb-8">
              CREATE AN ACCOUNT
            </h2>
            <label
              htmlFor="username"
              className="text-black opacity-50 text-lg font-normal "
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              aria-label="username"
              className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
            />
            <label
              htmlFor="email"
              className="text-black opacity-50 text-lg font-normal "
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              aria-label="email"
              className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
            />
            <label
              htmlFor="city"
              className="text-black opacity-50 text-lg font-normal "
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
            />
            <label
              htmlFor="licencenumber"
              className="text-black opacity-50 text-lg font-normal "
            >
              License Number
            </label>
            <input
              type="text"
              id="licencenumber"
              className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
            />
            <label
              htmlFor="createpassword"
              className="text-black opacity-50 text-lg font-normal "
            >
              Create Password
            </label>
            <input
              type="text"
              id="createpassword"
              className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
            />
            <label
              htmlFor="confirmpassword"
              className="text-black opacity-50 text-lg font-normal "
            >
              Confirm Password
            </label>
            <input
              type="text"
              id="confirmpassword"
              className="mb-2 focus:outline-none border border-black/20 h-10 rounded-sm px-3 max-w-md"
            />
            <button
              className="blue_button mb-8 mt-12 flex justify-center items-center max-w-fit"
              type="submit"
            >
              <span className="">Create</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
