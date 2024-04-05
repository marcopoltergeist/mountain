import { useLoaderData, useNavigate } from "react-router-dom";
import Article from "../components/Article";

export default function Books() {
  const articles = useLoaderData();

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate("/articles", { replace: true });
  };

  return (
    <>
      <h1>Article montagne :</h1>
      {articles.map((article) => (
        <Article key={article.id} book={article} refreshPage={refreshPage} />
      ))}
    </>
  );
}
