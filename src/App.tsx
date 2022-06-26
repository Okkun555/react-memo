import { ChangeEvent, FC, useCallback, useState } from 'react';
import './App.css';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';

const App: FC = () => {
  const { memos, addMemo, removeMemo} = useMemoList();
  const [text, setText] = useState<string>("");

  const changeForm = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  }

  const onClickAdd = (): void => {
    addMemo(text)

    setText("");
  }

  const onClickDelete = useCallback((index: number): void => {
    removeMemo(index);
  }, [removeMemo]);

  return (
    <div>
      <h1>簡易メモアプリ</h1>
      <input type="text" value={text} onChange={changeForm} />
      <button disabled={text.length <= 0} onClick={onClickAdd}>追加</button>

      <MemoList memos={memos} removeMemo={onClickDelete} />
    </div>
  );
}

export default App;