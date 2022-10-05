export type ActiveWordWithIndex = {
    wordIndex: number;
    wordDetail: {
      word: ReturnType<() => string>;
      indexFrom: number;
      indexTo: number;
    };
  };
  export type Data = [wordsStatus, [{ char: string; charColor: string }?], { CursorPosition: number }];
  export type wordsStatus = [{ word: string; indexFrom: number; indexTo: number }?];
  export type Statistics = [{ round: number; wpm: number; accuracy: number }?];