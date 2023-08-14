const Register = () => {
  return (
    <div className="mt-10">
      <div className="w-full bg-[#3C1FF4]  py-12">
        <p className="w-9/12 m-auto pl-4 text-white text-lg">register</p>
      </div>
      
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sign Up
          </h1>

          <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg border border-blue-700 sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign Up to New account
            </p>

            <div>
              <div className="relative">
                <input
                  type="number"
                  className="w-full rounded-lg border-gray-200 outline-blue-700 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter phone number"
                  name="phone"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 outline-blue-700 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  name="password"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 outline-blue-700 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign up
            </button>

            <p className="text-center text-sm text-gray-500">
              Have an account?
              <a className="underline" href="">
                Login in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
