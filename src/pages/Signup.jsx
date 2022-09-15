import { useState } from "react";

import Background from "../images/background.jpg";

function Signup() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);

  function handleSignUp(e) {
    e.preventDefault();

    if (email === `` || !email.includes(`@`) || !email.includes(`.com`)) {
      alert(`Enter a valid email.`);
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

    const user = {
      email: email,
      password: password,
    };

    setEmail(``);
    setPassword(``);
    setConfirmPassword(``);
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

          <button
            onClick={(e) => handleSignUp(e)}
            className="bg-choco px-3 py-1 rounded-md text-lg text-sunny"
            type="submit"
          >
            Sign up
          </button>
        </form>
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
