# React Markdown Editor

A modern, real-time markdown editor with live preview built with React and CodeMirror.

## Features

- ✨ Live markdown preview
- 🎨 Syntax highlighting with CodeMirror
- 📝 Support for GitHub Flavored Markdown (GFM)
- 🌙 Dark theme (oneDark)
- ⌨️ Rich keyboard shortcuts
- 🔢 Line numbers and active line highlighting
- 📦 Customizable editor themes

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/{username}/markdown-editor.git
cd markdown-editor

# Install dependencies
bun install
# or
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
bun dev
# or
npm start
# or
yarn start
```

The editor will be available at `http://localhost:5173`

## Usage

```jsx
import { useCallback, useState } from 'react';
import './app.css';
import Editor from './components/editor';
import Preview from './components/preview';

const App = () => {
  const [doc, setDoc] = useState<string>('# Hello, Markdown!\n\nStart editing...');

  const handleDocChange = useCallback((newDoc: string) => {
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

## Customization

### Changing the Theme

To customize the editor theme, edit `src/hooks/use-codemirror.tsx`:

```typescript
import { oneDark } from '@codemirror/theme-one-dark';
// Change 'oneDark' to your preferred theme
```

Available themes: https://codemirror.net/theme/

### Editing Syntax Highlighting

Modify the `syntaxHighlighting` object in `src/hooks/use-codemirror.tsx` to customize the appearance of markdown elements like headings, code blocks, etc.

## Project Structure

```
src/
├── components/
│   ├── editor/       # CodeMirror editor component
│   ├── preview/      # Markdown preview component
│   └── remark-code/  # Custom code block renderer
├── hooks/
│   └── use-codemirror.tsx  # CodeMirror setup hook
├── utils/
└── app.tsx          # Main app component
```

## License

MIT
