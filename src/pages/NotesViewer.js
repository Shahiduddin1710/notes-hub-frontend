import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotesViewer = () => {
  const { university, semester, subject } = useParams();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`https://notes-hub-backend-three.vercel.app/api/notes/${university}/${semester}/${subject}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFiles(data.notes);
        }
      })
      .catch(err => console.log(err));
  }, [university, semester, subject]);

  return (
    <div className="page-wrapper">
      <main className="page-container-main">

        <div className="hero-card">
          <h1 className="hero-title">
            {(subject || "Notes").toUpperCase()} Notes
          </h1>
        </div>

        <div className="notes-grid">
          {files.map((file, index) => (
            <div key={index} className="notes-card">

              <h3 className="card-title">{file.name}</h3>

              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="notes-btn mu"
              >
                Open →
              </a>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default NotesViewer;
