import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
        toast.success("Added to Collection ✅");
      } else {
        toast.info("Already in Collection ⚠️");
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("collection", JSON.stringify(state.items));
      toast.error("Removed from Collection ❌");
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
      toast.warn("Collection Cleared 🗑️");
    },
  },
});

export default collectionSlice.reducer;
export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;
