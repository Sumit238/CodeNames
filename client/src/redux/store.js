import { configureStore } from "@reduxjs/toolkit";
import WordBoardSlice from "./Slices/WordBoardSlice";
import GameSlice from "./Slices/GameSlice";
import TeamsSlice from "./Slices/TeamsSlice";
import PlayersSlice from "./Slices/PlayersSlice";
export const store= configureStore({
        reducer: {
            WordBoard:WordBoardSlice,
            Game: GameSlice,
            Teams:TeamsSlice,
            Players:PlayersSlice
        }
    }
)


/*
    variables : 
    1. pointer size;
    2. pointer color
    3. pointerState (erase,write)
    4.isMousePressed;




*/