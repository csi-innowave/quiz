import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResultState {
  userId: string | null;
  result: boolean[];
}

const initialState: ResultState = {
  userId: null,
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action: PayloadAction<boolean>) => {
      state.result.push(action.payload);
    },
    updateResultAction: (
      state,
      action: PayloadAction<{ trace: number; checked: boolean }>
    ) => {
      const { trace, checked } = action.payload;
      if (trace >= 0 && trace < state.result.length) {
        state.result[trace] = checked;
      }
    },
    resetResultAction: () => initialState,
  },
});

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  updateResultAction,
} = resultSlice.actions;

export default resultSlice.reducer;
