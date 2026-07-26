import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Focus from "@tiptap/extension-focus";

export const editorExtensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4, 5, 6],
    },
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),

  Placeholder.configure({
    placeholder: "Start writing your blog...",
  }),

  Underline,

  TextStyle,

  Color,

  Highlight.configure({
    multicolor: true,
  }),

  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),

  Link.configure({
    openOnClick: false,
    autolink: true,
    linkOnPaste: true,
    defaultProtocol: "https",
  }),

  Image.configure({
    allowBase64: true,
  }),

  Focus.configure({
    className: "has-focus",
    mode: "all",
  }),
];