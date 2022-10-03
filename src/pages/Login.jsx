import { IoPlayOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Background from "../images/background.png";

function Login() {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  function handleLogin(e) {
    e.preventDefault();

    if (email === `` || !email.includes(`@`) || !email.includes(`.com`)) {
      alert(`Enter a valid email.`);
      return;
    }

    if (password === ``) {
      alert(`Password cannot be empty.`);
      return;
    }

    if (
      allUsers.find((user) => user.email === email) &&
      allUsers.find((user) => user.password === password)
    ) {
      const currentUser = allUsers.find((user) => {
        return user.email === email;
      });

      dispatch({ type: `TOGGLE_ACTIVE`, isUserActive: true });
      localStorage.setItem(`currentUser`, JSON.stringify(currentUser));
      localStorage.setItem(`userActive`, JSON.stringify(true));

      setEmail(``);
      setPassword(``);
    } else {
      alert(`Email or password is incorrect.`);
      setEmail(``);
      setPassword(``);
      return;
    }
  }

  function handleGuestLogin() {
    const uniqueNo = Date.now();

    const currentUser = {
      id: uniqueNo,
      email: `guest@guest.com`,
      username: `Guest${uniqueNo.toString().substr(7)}`,
      tag: uniqueNo,
    };

    dispatch({ type: `TOGGLE_ACTIVE`, isUserActive: true });
    localStorage.setItem(`currentUser`, JSON.stringify(currentUser));
    localStorage.setItem(`userActive`, JSON.stringify(true));
  }

  return (
    <main className="h-[100vh] w-[100vw] relative">
      <section className="md:w-80 lg:w-96 flex flex-col gap-4 absolute bottom-28 right-2 lg:bottom-28 lg:right-40 border-[2px] border-choco rounded-lg p-4">
        <button
          onClick={() => handleGuestLogin()}
          className="bg-choco flex justify-center items-center gap-2 px-[6px] py-2 rounded-md text-lg text-sunny"
          type="button"
        >
          <IoPlayOutline className="md:hidden text-xl" />
          Continue without login (as Guest)
        </button>

        <form className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col">
            <label
              className="text-sm text-choco font-bold ml-2"
              htmlFor="email"
            >
              E-mail
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              id="email"
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              id="password"
              value={password}
              type="password"
            />
          </div>

          <button
            onClick={(e) => handleLogin(e)}
            className="bg-choco px-3 py-1 rounded-md text-lg text-sunny"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <p className="text-xs">
            Dummy E-mail:{" "}
            <span className="text-base tracking-widest">
              petlover@gmail.com
            </span>
          </p>

          <p className="text-xs">
            Dummy Password:{" "}
            <span className="text-base tracking-widest">petlover333</span>
          </p>
        </div>
        <Link
          to={"/signup"}
          className="bg-choco px-3 py-1 rounded-md text-center text-lg text-sunny"
          typeof="button"
        >
          I want to sign up
        </Link>
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
