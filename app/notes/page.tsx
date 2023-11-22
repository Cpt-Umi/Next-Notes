// import Axios from "axios";
import CreateNote from "./CreateNote";
import styles from "./Notes.module.css";
import { note } from "./interface";
import Link from "next/link";

const getNotes = async () => {
  //   const res = (await Axios.get("http://localhost:3000/api/notes")).data;
  const res = await fetch(`http://localhost:3000/api/notes`, {
    cache: "no-store",
  });

  const data = await res.json();
  //   console.log(data);
  return data;
};

const Note = (note: note) => {
  const { id, title, content } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h1>{title}</h1>
        <h5>{content}</h5>
      </div>
    </Link>
  );
};

const NotesPage = async () => {
  const notes = await getNotes();
  console.log("Notes", notes);
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes.map((note: note, key: number) => {
          return <Note key={key} {...note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
};

export default NotesPage;
