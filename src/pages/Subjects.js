import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Subjects = () => {
  const { university, semester } = useParams();
  const navigate = useNavigate();

  const subjectsData = {
    mu: {
      sem3: ["aoa", "coa", "maths", "dsgt", "genai"],
      sem4: [
        "syllabus",
        "cth",
        "os",
        "dbms",
        "web-technologies",
        "oe-ibs",
        "lab-experiments",
        "assignments"
      ]
    },
    msbte: {
      sem4: ["important-questions", "microproject", "syllabus"],
      sem5: ["microproject", "answers", "manual"],
      sem6: ["eti", "important-answers", "manual", "mgt", "microproject"]
    }
  };


  const interactiveLinks = {
    mu: {
      sem4: {
        dbms: "https://sql-practices.vercel.app/"
      }
    }
  };

  const subjects = subjectsData[university]?.[semester] || [];

  const openSubject = (subject) => {
    navigate(`/notes/${university}/${semester}/${subject}`);
  };

  return (
    <div className="page-wrapper">
      <main className="page-container-main">
        <h1 className="hero-title">{semester.toUpperCase()} Subjects</h1>

        <div className="notes-grid">
          {subjects.map((subject, index) => {
            const interactiveLink =
              interactiveLinks[university]?.[semester]?.[subject];

            return (
              <div key={index} className="notes-card">
                <h3 className="card-title">{subject.toUpperCase()}</h3>

                <button
                  className={`notes-btn ${
                    university === "mu" ? "mu" : "msbte"
                  }`}
                  onClick={() => openSubject(subject)}
                >
                  Open →
                </button>

                {interactiveLink && (
                  <a
                    href={interactiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`notes-btn ${
                      university === "mu" ? "mu" : "msbte"
                    }`}
                    style={{
                      marginTop: "10px",
                      display: "inline-block"
                    }}
                  >
                    SQL Practice
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Subjects;