import React from "react";
import ReactQuill from "react-quill";
import { modules, formats, EditorToolbar } from "./EditorToolbar";
import 'react-quill/dist/quill.snow.css'

export const Editor = () => {
  const [state, setState] = React.useState({ value: undefined });
  const handleChange = (e: any) => {
    setState(e.target.value);
  };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        // onChange={handleChange}
        placeholder={"Start typing your question detail here ..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
