import Post from "../Post";
import PostFeed from "../../data/postFeed.json";

function Feed() {
  const feed = PostFeed;

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
