import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const counterSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("Pastes", state.pastes);
      toast("Paste Created Successfully");
    },
    updatesToPastes: (state, action) => {},
    resetAllPastes: (state, action) => {},
    removeFromPastes: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addToPastes,
  updatesToPastes,
  resetAllPastes,
  removeFromPastes,
} = counterSlice.actions;

export default counterSlice.reducer;
