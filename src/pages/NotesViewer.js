import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotesViewer = () => {
  const { university, semester, subject } = useParams();

  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const showSqlPractice =
    university === "mu" &&
    semester === "sem4" &&
    subject === "dbms";

  useEffect(() => {
    fetch(
      `https://notes-hub-backend-three.vercel.app/api/notes?university=${university}&semester=${semester}&subject=${subject}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFiles(data.notes);
        } else {
          setError("Notes not available");
        }
      })
      .catch(() => setError("Failed to load notes"));
  }, [university, semester, subject]);

  if (error) return <h2>{error}</h2>;

  return (
    <div className="page-wrapper">
      <main className="page-container-main">
        <div className="hero-card">
          <h1 className="hero-title">
            {(subject || "Notes").toUpperCase()} Notes
          </h1>
        </div>

        {showSqlPractice && (
          <div style={{ marginBottom: "25px", textAlign: "center" }}>
            <a
              href="https://sql-practices.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="notes-btn mu"
            >
              Open SQL Interactive Practice 🚀
            </a>
          </div>
        )}

        <div className="notes-grid">
          {files.map((file, index) => (
            <div key={index} className="notes-card">
              <h3 className="card-title">{file.name}</h3>
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`notes-btn ${
                  university === "msbte" ? "msbte" : "mu"
                }`}
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