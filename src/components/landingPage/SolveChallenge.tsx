import React, { useEffect, useState } from "react";
import Editor from "../Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import Sidebar from "./usersProfile/Sidebar";
import ProfileHeader from "./usersProfile/ProfileHeader";

const SolveChallenge: React.FC = () => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(` <html>
  <body>${html}</body>
  <style>${css}</style>
  <script >${js}</script>
  </html>
 `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="profile ">
        <Sidebar />
        <div className="main gap-4 flex flex-col ">
          <ProfileHeader />
          <div className="pane top-pane">
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setJs}
            />
          </div>

          <div className="pane bg-black-100">
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SolveChallenge;
