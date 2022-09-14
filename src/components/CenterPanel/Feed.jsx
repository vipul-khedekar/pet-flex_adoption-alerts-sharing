import Post from "../Post";

function Feed() {
  return (
    <article className="bg-cream h-[76vh] w-full p-2 lg:p-4 rounded-lg overflow-y-scroll">
      <Post />

      <Post />
    </article>
  );
}

export default Feed;
