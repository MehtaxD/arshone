"use client";

import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";

import { editorExtensions } from "./extensions";
import Toolbar from "./toolbar";

import "./editor.css";

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TiptapEditor({
  value,
  onChange,
}: TiptapEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,

    extensions: editorExtensions,

    content: value || "",

    editorProps: {
      attributes: {
        class:
          "tiptap min-h-[450px] p-6 focus:outline-none",
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    if (editor.isFocused) return;

    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || "");
    }
  }, [editor, value]);

  if (!editor) return null;

  const handleLink = () => {
    const previous = editor.getAttributes("link").href ?? "";

    const url = window.prompt("Enter URL", previous);

    if (url === null) return;

    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  };

  const handleImage = () => {
    const url = window.prompt("Image URL");

    if (!url) return;

    editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">

      <Toolbar
        editor={editor}
        onAddLink={handleLink}
        onAddImage={handleImage}
      />

      <EditorContent editor={editor} />

    </div>
  );
}