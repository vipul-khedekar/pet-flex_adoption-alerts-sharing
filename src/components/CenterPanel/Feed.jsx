import PostFeed from "../../data/postFeed.json";

import Post from "../Post";

function Feed() {
  const feed = PostFeed;

  return (
    <article className="h-[96.5vh] md:w-72 lg:w-full bg-cream p-2 lg:p-4 rounded-lg overflow-y-scroll">
      {feed &&
        feed.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </article>
  );
}

export default Feed;
