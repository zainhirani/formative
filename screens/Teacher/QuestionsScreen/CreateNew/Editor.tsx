// import React, { useRef, useEffect } from "react";
// import { Editor } from "@tinymce/tinymce-react";

// interface TinyMCEEditorProps {
//   initialValue: string;
//   handleEditorChange: (content: string) => void;
// }

// const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({
//   initialValue,
//   handleEditorChange,
// }) => {
//   const editorRef = useRef<any>(null);

//   useEffect(() => {
//     const handleKeyUp = () => {
//       if (editorRef.current) {
//         handleEditorChange(editorRef.current.getContent());
//       }
//     };

//     if (editorRef.current) {
//       editorRef.current.on("keyup", handleKeyUp);
//     }

//     return () => {
//       if (editorRef.current) {
//         editorRef.current.off("keyup", handleKeyUp);
//       }
//     };
//   }, [handleEditorChange]);

//   return (
//     <Editor
//       apiKey="n5dfl588dfdndu2dda1rtm9h9g5fwbbj21lzjf99a72k5xzz"
//       onInit={(evt, editor) => (editorRef.current = editor)}
//       initialValue={initialValue}
// init={{
//   plugins:
//     "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
// toolbar:
//   "undo redo formatselect alignleft aligncenter alignright alignjustify forecolor bold italic underline strikethrough removeformat fontsizeselect numlist bullist insertfile image link codesample",
//   autosave_ask_before_unload: true,
//   autosave_interval: "30s",
//   autosave_prefix: "{path}{query}-{id}-",
//   autosave_restore_when_empty: false,
//   autosave_retention: "2m",
//   link_list: [
//     { title: "My page 1", value: "https://www.tiny.cloud" },
//     { title: "My page 2", value: "http://www.moxiecode.com" },
//   ],
//   placeholder: "Start typing your question detail here ...",
//   height: 240,
//   menubar: false,
//   quickbars_selection_toolbar:
//     "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
//   noneditable_noneditable_class: "mceNonEditable",
//   contextmenu: "link image imagetools table",
//   content_style:
//     "body { font-family:Helvetica,Arial,sans-serif; font-size:14px;border: none; box-shadow: none; }",
// }}
//     />
//   );
// };

// export default TinyMCEEditor;

import React from "react";
import Paper from "@mui/material/Paper";
import { Editor } from "@tinymce/tinymce-react";

interface EditorComponentProps {
  value: string;
  onChange: (content: string) => void;
}

const EditorComponent: React.FC<EditorComponentProps> = ({
  value,
  onChange,
}) => {
  const handleEditorChange = (content: string, editor: any) => {
    onChange(content);
  };

  return (
    <Paper elevation={3} sx={{ width: "100%", height: "400px" }}>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_EDITOR_API_KEY}
        value={value}
        init={{
          toolbar_mode: "wrap",
          height: 400,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "monospace bold italic underline strikethrough | " +
            "forecolor backcolor | removeformat | " +
            "alignleft aligncenter alignright alignjustify | " +
            "outdent indent | numlist bullist | " +
            "blockquote subscript superscript | " +
            "link unlink | table | " +
            "image media | code",
          setup: (editor) => {
            editor.ui.registry.addButton("subscript", {
              icon: "subscript",
              tooltip: "Subscript",
              onAction: () => {
                editor.execCommand("mceToggleFormat", false, "sub");
              },
            });

            editor.ui.registry.addButton("superscript", {
              icon: "superscript",
              tooltip: "Superscript",
              onAction: () => {
                editor.execCommand("mceToggleFormat", false, "sup");
              },
            });
          },
        }}
        onEditorChange={handleEditorChange}
      />
    </Paper>
  );
};

export default EditorComponent;
