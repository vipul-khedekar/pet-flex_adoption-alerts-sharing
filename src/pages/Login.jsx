import { IoPlayOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Background from "../images/background.png";

function Login() {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.allUsers);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const handleLogin = (e) => {
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
  };

  const handleGuestLogin = () => {
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
  };

  return (
    <main className="h-[100vh] w-[100vw] relative">
      <article className="md:w-80 lg:w-96 absolute top-10 right-6 md:right-2 lg:right-36 text-choco">
        <header>
          <h2 className="mb-2 font-caveatBrush text-8xl">Pet Flex</h2>
        </header>

        <section>
          <p className="ml-4 text-sm">‣ Search pets for adoption</p>

          <p className="ml-4 text-sm">‣ Bookmark the alerts</p>

          <p className="ml-4 text-sm">‣ View adoptions as a guest user</p>

          <p className="ml-4 text-sm">‣ Social media for pet owners</p>
        </section>
      </article>

      <article className="md:w-80 lg:w-96 flex flex-col gap-4 p-4 border border-choco rounded-lg absolute bottom-12 right-2 lg:bottom-28 lg:right-40 island">
        <button
          onClick={() => handleGuestLogin()}
          className="bg-choco flex justify-center items-center gap-2 px-[6px] py-2 mb-2 rounded-md text-sunny text-lg"
          type="button"
        >
          <IoPlayOutline className="md:hidden text-xl" />
          Login as a Guest user
        </button>

        <form className="flex flex-col justify-center items-center gap-4">
          <section className="flex flex-col">
            <label
              className="ml-2 text-choco text-sm font-bold"
              htmlFor="email"
            >
              E-mail
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-64 bg-cream p-2 -mt-1 rounded-lg outline-none text-choco text-xl"
              value={email}
              type="email"
              id="email"
            />
          </section>

          <section className="flex flex-col">
            <label
              className="ml-2 text-choco text-sm font-bold"
              htmlFor="password"
            >
              Password
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-64 bg-cream p-2 -mt-1 rounded-lg outline-none text-choco text-xl"
              value={password}
              type="password"
              id="password"
            />
          </section>

          <button
            onClick={(e) => handleLogin(e)}
            className="bg-choco px-3 py-1 rounded-md text-sunny text-lg"
            type="submit"
          >
            Login
          </button>
        </form>

        <section className="mt-4">
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
        </section>

        <Link
          className="bg-choco px-3 py-1 rounded-md text-sunny text-lg text-center"
          to={`/signup`}
        >
          <button type="button">I want to sign up</button>
        </Link>
      </article>

      <img
        className="h-[100vh] w-[100vw] object-cover"
        src={Background}
        alt="background"
      />
    </main>
  );
}

export default Login;
