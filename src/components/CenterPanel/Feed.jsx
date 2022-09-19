import Post from "../Post";

import feed from "../../data/feed.json";

function Feed() {
  return (
    <article className="bg-cream h-[96.5vh] md:w-72 lg:w-full p-2 lg:p-4 rounded-lg overflow-y-scroll">
      {feed &&
        feed.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </article>
  );
}

export default Feed;
