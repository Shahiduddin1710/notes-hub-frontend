import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Files = () => {
  const { university, semester, subject } = useParams();

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        setError("");

        const res = await fetch(
          `https://notes-hub-backend-three.vercel.app/api/notes?university=${university}&semester=${semester}&subject=${subject}`,
        );
        const data = await res.json();

        if (data.success && data.notes.length > 0) {
          setFiles(data.notes);
        } else {
          setError("This section will be updated with study materials soon");
        }
      } catch (err) {
        setError("Failed to load files");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [university, semester, subject]);

  if (loading) return <h2>Loading Files...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="page-wrapper">
      <main className="page-container-wide">
        <div className="hero-card">
          <h1 className="hero-title">
            {(subject || "Notes").toUpperCase()} Files
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

export default Files;
