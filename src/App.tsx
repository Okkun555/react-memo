import { ChangeEvent, useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState<string>("");
  const [memoList, setMemoList] = useState<string[]>([]);

  const changeForm = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }

  const addMemo = (): void => {
    const newMemo = [...memoList];
    newMemo.push(text);
    setMemoList(newMemo);

    setText("");
  }

  return (
    <div>
      <h1>簡易メモアプリ</h1>
      <input type="text" value={text} onChange={changeForm} />
      <button onClick={addMemo}>追加</button>

      <p>メモ一覧</p>
      {memoList.map((memo, index) => (
        <li key={index}>
          {memo}
        </li>
      ))}
    </div>
  );
}

export default App;