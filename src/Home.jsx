import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = UseFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
