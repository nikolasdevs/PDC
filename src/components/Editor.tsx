import React, { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

interface EditorProps {
  language: string;
  displayName: string;
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({
  language,
  displayName,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor: any, data: any, value: string) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
        className="code-mirror-wrapper"
        options={{
          mode: language,
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,

          
          readOnly: false,


        }}
      />
    </div>
  );
};

export default Editor;
