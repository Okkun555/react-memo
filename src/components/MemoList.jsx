import { FC } from "react";

type Props = {
    memos: string[];
    removeMemo: (index: number) => void,
}

export const MemoList: FC<Props> = props => {
    const { memos, removeMemo } = props;
    return (
        <div>
            <p>メモ一覧</p>
            {memos.map((memo, index) => (
                <li key={index}>
                    <span>{memo}</span>
                    <button onClick={() => removeMemo(index)}>削除</button>
                </li>
            ))}
        </div>
    )
}