import * as React from 'react';
import { useState, useCallback } from 'react';
import * as ReactDOM from 'react-dom';

import './app.css';
import Editor from './components/editor';
import Preview from './components/preview';

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('#Hello, World!\n');

  const handleDocChange = useCallback((newDoc) => {
    setDoc(newDoc);
  }, []);
  return (
    <div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
