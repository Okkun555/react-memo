import { useCallback, useState } from "react"

export const useMemoList = () => {
    const [memos, setMemos] = useState<string[]>([]);

    const addMemo = (text: string): void => {
        if (text.length <= 0) return;
        const newMemo = [...memos];
        newMemo.push(text);
        setMemos(newMemo);

      }
    
      const removeMemo = useCallback((index: number): void => {
        const newMemo = [...memos];
        newMemo.splice(index, 1);
        setMemos(newMemo);
      }, [memos]);

    return {
        memos,
        addMemo,
        removeMemo,
    }
}