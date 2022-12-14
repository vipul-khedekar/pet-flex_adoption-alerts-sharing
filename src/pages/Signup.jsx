import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Background from "../images/background.png";

import Spinner from "../components/loaders/Spinner";

function Signup() {
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.allUsers);
  const [email, setEmail] = useState(``);
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);
  const [user, setUser] = useState(allUsers);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(``);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (email === `` || !email.includes(`@`) || !email.includes(`.com`)) {
      alert(`Enter a valid email with @ and .com domain`);
      return;
    }

    if (username.length < 3 || username.length > 14) {
      alert(`Username cannot be less than 3 and more than 14 characters long.`);
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

    if (allUsers.find((item) => item.username === username)) {
      alert(`Username already exists.`);
      return;
    }

    setIsLoading(true);

    const newUser = {
      id: Date.now(),
      email: email,
      username: username,
      tag: Date.now(),
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
  };

  return (
    <main className="h-[100vh] w-[100vw] relative">
      <article className="md:w-80 lg:w-96 absolute top-10 right-6 md:right-2 lg:right-36 text-choco">
        <header>
          <h3 className="mb-2 font-caveatBrush text-8xl">Pet Flex</h3>
        </header>

        <section>
          <p className="ml-4 text-sm">‣ Search for pets to adoption</p>

          <p className="ml-4 text-sm">‣ Bookmark the alerts</p>

          <p className="ml-4 text-sm">‣ Social media for pet owners</p>

          <p className="ml-4 text-sm">‣ View without login, as a guest user</p>
        </section>
      </article>

      <article className="md:w-80 lg:w-[22rem] flex flex-col gap-4 p-4 border border-choco rounded-lg absolute bottom-8 right-2 lg:bottom-20 lg:right-40 island">
        <form className="flex flex-col justify-center items-center gap-4">
          <section className="flex flex-col">
            <label
              className="text-sm text-choco font-bold ml-2"
              htmlFor="email"
            >
              E-mail
            </label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              value={email}
              type="email"
              id="email"
              required
            />
          </section>

          <section className="flex flex-col">
            <label
              className="text-sm text-choco font-bold ml-2"
              htmlFor="username"
            >
              UserName
            </label>

            <input
              onChange={(e) => setUsername(e.target.value)}
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              value={username}
              type="text"
              id="username"
              required
            />
          </section>

          <section className="flex flex-col">
            <label
              className="text-sm text-choco ml-2 font-bold"
              htmlFor="password"
            >
              Password
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              value={password}
              type="password"
              id="password"
              required
            />
          </section>

          <section className="flex flex-col">
            <label
              className="text-sm text-choco ml-2 font-bold"
              htmlFor="password"
            >
              Confirm Password
            </label>

            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-cream h-12 w-64 p-2 -mt-1 rounded-lg text-choco text-xl outline-none"
              value={confirmPassword}
              type="password"
              id="password"
              required
            />
          </section>

          {isLoading ? (
            <Spinner />
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
          to={`/`}
        >
          <button type="button">Go to login page</button>
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

export default Signup;
