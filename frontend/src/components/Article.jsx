/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function Book({ article, refreshPage }) {
  const [updatedTitle, setUpdatedTitle] = useState(article.title);
  const [updatedAuthor, setUpdatedAuthor] = useState(article.author);
  const [updatedSummary, setUpdatedSummary] = useState(article.summary);
  const [isEditing, setIsEditing] = useState(false);

  // fonction pour modifier les infos d'un livre
  const handleUpdate = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/articles/${article.id}`, {
        title: updatedTitle,
        author: updatedAuthor,
        summary: updatedSummary,
      })
      .then(() => refreshPage(), setIsEditing(false))
      .catch((error) => console.error("error update article", error));
  };

  // fonction pour supprimer un livre
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/articles/${article.id}`)
      .then(() => refreshPage())
      .catch((error) => console.error(error));
  };

  return (
    <article>
      {isEditing ? (
        <div>
          <label>
            Title
            <input
              type="text"
              value={updatedTitle}
              onChange={(event) => setUpdatedTitle(event.target.value)}
            />
          </label>
          <label>
            Author
            <input
              type="text"
              value={updatedAuthor}
              onChange={(event) => setUpdatedAuthor(event.target.value)}
            />
          </label>
          <label>
            Summary
            <textarea
              value={updatedSummary}
              onChange={(event) => setUpdatedSummary(event.target.value)}
            />
          </label>
          <button type="button" onClick={handleUpdate}>
            Recoder modification
          </button>
        </div>
      ) : (
        <div>
          <h3>{article.title}</h3>
          <h4>{article.author}</h4>
          <p>{article.summary}</p>
          <button type="button" onClick={handleDelete}>
            Deleted article
          </button>
          <button type="button" onClick={() => setIsEditing(true)}>
            Update article
          </button>
        </div>
      )}
    </article>
  );
}

Book.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  refreshPage: PropTypes.func.isRequired,
};
