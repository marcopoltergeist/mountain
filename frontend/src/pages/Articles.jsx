import { useLoaderData, useNavigate } from "react-router-dom";
import Article from "../components/Article";

export default function Books() {
  const article = useLoaderData();

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate("/article", { replace: true });
  };

  return (
    <>
      <h1>Article montagne :</h1>
      {article.map((book) => (
        <Article key={book.id} book={book} refreshPage={refreshPage} />
      ))}
    </>
  );
}
