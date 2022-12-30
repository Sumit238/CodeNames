import { configureStore } from "@reduxjs/toolkit";
import WordBoardSlice from "./Slices/WordBoardSlice";
export const store= configureStore({
        reducer: {
            WordBoard:WordBoardSlice,
            
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