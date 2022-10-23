import { Link } from "react-router-dom";

function Notifications() {
  return (
    <aside className="h-auto w-[80vw] lg:w-[50vw] bg-sea flex flex-col gap-4 p-6 rounded-2xl absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] modal-shadow overflow-y-scroll font-bold text-center">
      <article>
        <p className="text-lg font-bold text-center">
          No notifications at the moment
        </p>
      </article>

      <footer className="self-end">
        <Link to={`/`}>
          <button
            className="h-10 w-40 bg-marine rounded-md text-sea text-lg"
            type="button"
          >
            Go Back
          </button>
        </Link>
      </footer>
    </aside>
  );
}

export default Notifications;
