"use client";

import { useState } from "react";

export default function Home() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  function handleSave() {
    setNotes([...notes, note]);
    setNote("");
  }

  return (
    <div>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type a note..."
      />
      <button onClick={handleSave}>Save</button>

      <ul>
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}