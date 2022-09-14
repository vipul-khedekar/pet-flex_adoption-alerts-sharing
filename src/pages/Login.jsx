import { IoLogoGoogle } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";

import Background from "../images/background.jpg";

function Login() {
  return (
    <main className="h-[100vh] w-[100vw] relative">
      <section className="flex flex-col gap-4 absolute top-20 right-14 lg:top-28 lg:right-72 border-[2px] border-sea rounded-lg p-8">
        <button
          className="bg-choco flex justify-center items-center gap-2 px-3 py-1 rounded-md text-lg text-sunny"
          type="button"
        >
          <IoPlayOutline className="text-xl" /> Continue without login (as
          Guest)
        </button>

        <button
          className="bg-choco flex justify-center items-center gap-2 px-3 py-1 rounded-md text-lg text-sunny"
          type="button"
        >
          <IoLogoGoogle /> Login with Google
        </button>

        <form className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col">
            <label
              className="text-sm text-choco font-bold ml-2"
              htmlFor="email"
            >
              E-mail/Username
            </label>

            <input
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              id="email"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-sm text-choco ml-2 font-bold"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              id="password"
              type="password"
            />
          </div>

          <button
            className="bg-choco px-3 py-1 rounded-md text-lg text-sunny"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <p>Dummy E-mail: petlover@gmail.com</p>

          <p>Dummy Username: petlover333</p>

          <p>Dummy Password: petlover333</p>
        </div>

        <button
          className="bg-choco px-3 py-1 rounded-md text-lg text-sunny"
          typeof="button"
        >
          I want to sign up
        </button>
      </section>

      <img
        className="h-[100vh] w-[100vw] object-cover"
        src={Background}
        alt="background"
      />
    </main>
  );
}

export default Login;
