import { createSlice } from "@reduxjs/toolkit";
import * as stages from "../../utils/constants";
import { fetchQuestionFail, fetchQuestionsSuccess } from "./game";

const initialState = {
  stage: "START_GAME",
};

const gameState = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    startGame(state) {
      state.stage = stages.FETCHING_GAME;
    },
    cancelGame(state) {
      state.stage = stages.START_GAME;
    },
    finishGame(state) {
      state.stage = stages.END_GAME;
    },
    restartGame(state) {
      state.stage = stages.START_GAME;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsSuccess, (state) => {
        state.stage = stages.GAME;
      })
      .addCase(fetchQuestionFail, (state) => {
        state.stage = stages.START_GAME;
      });
  },
});

export const { startGame, cancelGame, finishGame, restartGame } =
  gameState.actions;

export default gameState.reducer;
