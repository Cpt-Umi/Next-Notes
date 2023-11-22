"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async () => {
    try {
      await fetch(`http://localhost:3000/api/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      });

      setTitle("");
      setContent("");
      router.refresh();
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <form onSubmit={create}>
      <h3>Create Note: </h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">Create Note</button>
    </form>
  );
}

export default CreateNote;
