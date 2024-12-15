import { useParams } from "react-router-dom";

export default function AllPosts() {
  const { pageNumber } = useParams();
  return <h2>All posts: page {pageNumber}</h2>;
}
