import { useCallback, useState } from "react";

import "./app.css";
import Editor from "./components/editor";
import Preview from "./components/preview";

const App = () => {
  const [doc, setDoc] = useState<string>(
    "# Hello, Markdown!\n\nStart editing to see some magic happen."
  );

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  );
};

export default App;
