import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },

  // 1st method

  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCream--;
  //   },
  // },

  //2nd method

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
