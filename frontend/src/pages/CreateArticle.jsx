/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import axios from "axios";

export default function CreateArticle() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    author: "",
  });

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitArticle = (event) => {
    event.preventDefault();
    console.info("Contenu du formulaire :", form);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/articles/`, form)
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>Créer un article </h1>
      <form onSubmit={submitArticle}>
        <label htmlFor="title">Titre de l'article :</label>
        <input
          type="text"
          name="title"
          onChange={handleChangeForm}
          id="title"
        />
        <label htmlFor="author">Auteur :</label>
        <input
          type="text"
          name="author"
          onChange={handleChangeForm}
          id="author"
        />
        <label htmlFor="summary">Résumé de la randonnée: </label>
        <textarea name="summary" onChange={handleChangeForm} id="summary" />

        <input type="submit" />
      </form>
    </>
  );
}
