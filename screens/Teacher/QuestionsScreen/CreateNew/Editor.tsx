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
