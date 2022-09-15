import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Background from "../images/background.jpg";
import Loader from "../components/Loader";

function Signup() {
  const { allUsers } = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const [user, setUser] = useState(allUsers);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(``);

  function handleSignUp(e) {
    e.preventDefault();

    if (email === `` || !email.includes(`@`) || !email.includes(`.com`)) {
      alert(`Enter a valid email with @ and .com domain`);
      return;
    }

    if (
      password === `` ||
      password.length < 8 ||
      password.length > 20 ||
      confirmPassword === `` ||
      confirmPassword.length < 8 ||
      confirmPassword.length > 20
    ) {
      alert(
        `Passwords should not be less than 8 or more than 20 characters long.`
      );
      return;
    }

    if (password !== confirmPassword) {
      alert(`Passwords do not match.`);
      return;
    }

    if (allUsers.find((item) => item.email === email)) {
      alert(`Email already exists.`);
      return;
    }

    setIsLoading(true);

    const newUser = {
      id: Date.now(),
      email: email,
      password: password,
    };
    allUsers.unshift(newUser);
    setUser(user);
    dispatch({ type: `NEW_USER_SIGN_UP`, allUsers: user });
    localStorage.setItem(`allUsers`, JSON.stringify(allUsers));

    setEmail(``);
    setPassword(``);
    setConfirmPassword(``);

    setTimeout(() => {
      setIsLoading(false);
      setMessage(`Account created. Go to login page.`);
      setTimeout(() => {
        setMessage(``);
      }, 3000);
    }, 1500);
  }

  return (
    <main className="h-[100vh] w-[100vw] relative">
      <section className="flex flex-col gap-4 absolute top-20 right-14 lg:top-28 lg:right-72 border-[2px] border-sea rounded-lg p-8">
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
              type="email"
              value={email}
              required
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
              type="password"
              value={password}
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-sm text-choco ml-2 font-bold"
              htmlFor="password"
            >
              Confirm Password
            </label>

            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              id="password"
              type="password"
              value={confirmPassword}
              required
            />
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <button
              onClick={(e) => handleSignUp(e)}
              className="bg-choco px-3 py-1 rounded-md text-lg text-sunny"
              type="submit"
            >
              Sign up
            </button>
          )}

          {message && <p className="text-sm italic text-center">{message}</p>}
        </form>

        <Link
          className="bg-choco px-3 py-1 mt-4 rounded-md text-sunny text-center"
          to={"/login"}
        >
          Go to login page
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

export default Signup;
