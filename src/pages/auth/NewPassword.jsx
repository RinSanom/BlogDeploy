import { Button, Label, TextInput } from "flowbite-react";

export function NewPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle password submission logic here
  };

  return (
    <div className="flex flex-col h-screen dark:bg-black">
      <h1 className="font-bold text-2xl text-center mt-[3rem] mb-10 sm:mt-16 sm:mb-8">
        New Password
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-40 xl:mx-auto md:mr-[5rem]">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="new-password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Enter New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 sm:w-72 lg:w-96"
              required
              placeholder="8 characters at least"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-72 lg:w-96 p-2.5"
              required
            />
          </div>

          {/* Centering the button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-56 px-5 py-2.5"
            >
              Send
            </button>
          </div>
        </form>

        <img
          src="./src/assets/image/Reset_password.svg"
          alt="Forgot password illustration"
          className=" max-w-full md:max-w-md md:mt-0 mt-4 "
        />
      </div>
    </div>
  );
}
