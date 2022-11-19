import React, { userState, useEffect } from "react";

const NotesListPage = () => {
  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    console.log("DATA:", data);
    setNotes(data);
  };

  let [notes, setNotes] = userState([]);

  useEffect(() => {
    getNotes();
  }, []);

  return <div>notes</div>;
};

export default NotesListPage;
