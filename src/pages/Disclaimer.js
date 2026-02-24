import React from "react";

const Disclaimer = () => {
  return (
    <div className="page-wrapper">
      <main className="page-container-main">
        <div
          style={{
            background: "white",
            padding: "3rem 3.5rem",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            lineHeight: "1.8",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#1e293b",
            }}
          >
            NotesHub – Terms of Use & Disclaimer
          </h1>

          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            Welcome to NotesHub. By accessing or using this platform, you agree
            to comply with and be legally bound by the following Terms of Use
            and Disclaimer. If you do not agree with these terms, please
            discontinue using the platform.
          </p>

          <h3 style={{ marginTop: "1.8rem", color: "#1e293b" }}>
            Purpose of NotesHub
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            NotesHub is an independent educational platform created to help
            students access organized study materials such as personal notes,
            solved previous year question papers, and academic reference
            resources. All materials are provided strictly for educational and
            self-learning purposes.
          </p>

          <h3 style={{ marginTop: "1.8rem", color: "#1e293b" }}>
            Independent Platform Statement
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            NotesHub is not associated, affiliated, endorsed, or owned by any
            university, educational board, government authority, or private
            institution unless explicitly stated. Any references to universities,
            boards, courses, or examinations are used solely for informational
            purposes. All official names, trademarks, and academic materials
            belong to their respective owners.
          </p>

          <h3 style={{ marginTop: "1.8rem", color: "#1e293b" }}>
            Use of Content
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            The content available on NotesHub may include study notes, previous
            question papers, and reference materials collected from public or
            educational sources. Users may access and download materials only
            for personal educational use.
          </p>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            Redistribution, commercial use, modification, or misuse of content
            without proper permission is strictly prohibited.
          </p>

          <h3 style={{ marginTop: "1.8rem", color: "#1e293b" }}>
            Content Accuracy
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            While we strive to provide helpful and relevant academic resources,
            NotesHub does not guarantee that all content is fully accurate,
            complete, or updated at all times. Users are advised to verify
            important academic information such as syllabus updates, exam
            schedules, and official notifications directly from their respective
            institutions.
          </p>

          <h3 style={{ marginTop: "1.8rem", color: "#1e293b" }}>
            Limitation of Liability
          </h3>

          <p style={{ marginBottom: "1rem", color: "#475569" }}>
            NotesHub shall not be held responsible for:
          </p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginBottom: "1.5rem",
              color: "#475569",
            }}
          >
            <li>Any academic loss due to incorrect or outdated information</li>
            <li>Misinterpretation of study material</li>
            <li>
              Technical interruptions, website downtime, or service
              unavailability
            </li>
            <li>
              Any decisions made based on the materials available on this
              platform
            </li>
          </ul>

          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            All services are provided on an <strong>“AS IS”</strong> and{" "}
            <strong>“AS AVAILABLE”</strong> basis.
          </p>

          <h3 style={{ marginTop: "1.8rem", color: "#1e293b" }}>
            Copyright & Content Concerns
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            NotesHub does not claim ownership of copyrighted academic content
            unless explicitly mentioned.
          </p>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            If any organization or individual believes that their copyrighted
            material has been shared improperly, they may contact the platform
            for review and appropriate action, including removal if necessary.
          </p>

          <h3 style={{ marginTop: "1.8rem", color: "#1e293b" }}>
            Policy Updates
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "#475569" }}>
            NotesHub reserves the right to update or modify these Terms at any
            time. Continued use of the platform after changes indicates
            acceptance of the revised terms.
          </p>

          <p style={{ marginTop: "2rem", color: "#475569" }}>
            By using NotesHub, you acknowledge that the platform is intended
            purely as a supportive educational resource and that you agree to
            the terms stated above.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
