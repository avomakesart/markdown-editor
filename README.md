# React Markdown Editor with preview

How cool would it be to have a markdown editor for your files?

With this editor you can do it, just make sure to do the following:

- Fork this repo.
- Clone your forked repo:

```bash
git clone https://github.com/{username}/markdown-editor.git 
```

- Use it as you want to.

> Do you need different styles for it?

- Go to to `src/hooks/use-codemirror.tsx` edit the theme, so far I'm using `oneDark` theme, but you can replace it with the theme that you like.

- Themes: <https://codemirror.net/theme/>

## Use case

```jsx
// css for the app container 
import './app.css';
import Editor from './components/editor';
import Preview from './components/preview';

const App: React.FC = () => {
  // initial state for the editor and preview
  const [doc, setDoc] = useState<string>('#Hello, World!\n');

  // Change handler
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
```

### Licence

MIT
