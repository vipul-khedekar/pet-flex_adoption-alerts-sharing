import Post from "../Post";

function Feed() {
  return (
    <article className="bg-cream h-[76vh] w-full flex flex-col justify-start items-center p-2 lg:p-4 rounded-lg">
      <Post />
    </article>
  );
}

export default Feed;
