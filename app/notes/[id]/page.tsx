import styles from "../Notes.module.css";

const getNote = async (noteId: string) => {
  const res = await fetch(`http://localhost:3000/api/notes/${noteId}`, {
    next: { revalidate: 10 },
  });

  const data = await res.json();
  return data;
};

const NotePage = async ({ params }: any) => {
  const [note] = await getNote(params.id);
  console.log("Note", note);
  return (
    <div>
      <h1>Note:</h1>
      <div className={styles.note}>
        <h1>{note.title}</h1>
        <h5>{note.content}</h5>
      </div>
    </div>
  );
};

export default NotePage;
