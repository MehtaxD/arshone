"use client";

import type { Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaLink,
  FaImage,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

interface ToolbarProps {
  editor: Editor;
  onAddLink: () => void;
  onAddImage: () => void;
}

interface ButtonProps {
  active?: boolean;
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

function ToolbarButton({
  active,
  title,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-md border transition
        ${
          active
            ? "border-blue-600 bg-blue-600 text-white"
            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
        }`}
    >
      {children}
    </button>
  );
}

export default function Toolbar({
  editor,
  onAddLink,
  onAddImage,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b bg-gray-50 p-3">

      {/* Heading */}
      <select
        className="h-9 rounded-md border border-gray-300 px-2 text-sm"
        value={
          editor.isActive("heading", { level: 1 })
            ? "1"
            : editor.isActive("heading", { level: 2 })
            ? "2"
            : editor.isActive("heading", { level: 3 })
            ? "3"
            : "0"
        }
        onChange={(e) => {
          const level = Number(e.target.value);

          if (level === 0) {
            editor.chain().focus().setParagraph().run();
          } else {
            editor
              .chain()
              .focus()
              .toggleHeading({ level: level as 1 | 2 | 3 })
              .run();
          }
        }}
      >
        <option value="0">Paragraph</option>
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
      </select>

      <ToolbarButton
        title="Bold"
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <FaBold />
      </ToolbarButton>

      <ToolbarButton
        title="Italic"
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <FaItalic />
      </ToolbarButton>

      <ToolbarButton
        title="Underline"
        active={editor.isActive("underline")}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <FaUnderline />
      </ToolbarButton>

      <ToolbarButton
        title="Bullet List"
        active={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <FaListUl />
      </ToolbarButton>

      <ToolbarButton
        title="Numbered List"
        active={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <FaListOl />
      </ToolbarButton>

      <ToolbarButton
        title="Quote"
        active={editor.isActive("blockquote")}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <FaQuoteLeft />
      </ToolbarButton>

      <ToolbarButton
        title="Link"
        active={editor.isActive("link")}
        onClick={onAddLink}
      >
        <FaLink />
      </ToolbarButton>

      <ToolbarButton
        title="Image"
        onClick={onAddImage}
      >
        <FaImage />
      </ToolbarButton>

      <ToolbarButton
        title="Undo"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <FaUndo />
      </ToolbarButton>

      <ToolbarButton
        title="Redo"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <FaRedo />
      </ToolbarButton>
    </div>
  );
}