import { useEffect } from "react";
import useCodeMirror from "../../hooks/use-codemirror";
import "./editor.css";
import type { EditorState } from "@codemirror/state";

interface EditorProps {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor = (props: EditorProps) => {
  const { onChange, initialDoc } = props;
  const handleChange = (state: EditorState) => {
    console.log("Editor content changed", state);
    return onChange(state.doc.toString());
  };

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView]);
  return <div className="editor-wrapper" ref={refContainer}></div>;
};

export default Editor;
