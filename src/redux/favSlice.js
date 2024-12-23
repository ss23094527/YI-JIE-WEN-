import { createSlice } from '@reduxjs/toolkit';

// Part1: Define Slice (including reducers and actions)
const initialState = { favItems: [] };
const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addfavItems: (state, action) => {
      const item = action.payload;
      const product = state.favItems.find((x) => x.id === item.id);
      if (!!product) {
         const favItems = state.favItems.map((x) =>
            x.id === product.id ? item : x
         );
         state.favItems = favItems;
      } else {
        state.favItems = [...state.favItems, item];
      }
    },
  },
});

// export state to global
export const selectfavItems = (state) => state.fav.favItems;

// export actions to global
export const { addfavItems } = favSlice.actions;

// export reducer to global
export default favSlice.reducer;
