import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="blog-detail">
      <h2>Blog Detail - {id}</h2>
    </div>
  );
}
