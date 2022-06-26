import { ChangeEvent, FC, useCallback, useState } from 'react';
import './App.css';
import { MemoList } from './components/MemoList';

const App: FC = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const changeForm = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }

  const addMemo = (): void => {
    const newMemo = [...memos];
    newMemo.push(text);
    setMemos(newMemo);

    setText("");
  }

  const removeMemo = useCallback((index: number): void => {
    const newMemo = [...memos];
    newMemo.splice(index, 1);
    setMemos(newMemo);
  }, [memos]);

  return (
    <div>
      <h1>簡易メモアプリ</h1>
      <input type="text" value={text} onChange={changeForm} />
      <button onClick={addMemo}>追加</button>

      <MemoList memos={memos} removeMemo={removeMemo} />
    </div>
  );
}

export default App;