import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TinyMCEEditorProps {
  initialValue: string;
  handleEditorChange: (content: string) => void;
}

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({
  initialValue,
  handleEditorChange,
}) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyUp = () => {
      if (editorRef.current) {
        handleEditorChange(editorRef.current.getContent());
      }
    };

    if (editorRef.current) {
      editorRef.current.on("keyup", handleKeyUp);
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.off("keyup", handleKeyUp);
      }
    };
  }, [handleEditorChange]);

  return (
    <Editor
      apiKey="n5dfl588dfdndu2dda1rtm9h9g5fwbbj21lzjf99a72k5xzz"
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue={initialValue}
      init={{
        plugins:
          "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
        toolbar:
          "undo redo formatselect alignleft aligncenter alignright alignjustify forecolor bold italic underline strikethrough removeformat fontsizeselect numlist bullist insertfile image link codesample",
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        link_list: [
          { title: "My page 1", value: "https://www.tiny.cloud" },
          { title: "My page 2", value: "http://www.moxiecode.com" },
        ],
        placeholder: "Start typing your question detail here ...",
        height: 240,
        menubar: false,
        quickbars_selection_toolbar:
          "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        noneditable_noneditable_class: "mceNonEditable",
        contextmenu: "link image imagetools table",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px;border: none; box-shadow: none; }",
      }}
    />
  );
};

export default TinyMCEEditor;
