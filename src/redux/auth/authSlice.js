import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';
import { fetchRegistration } from './auth-operations';
const initialState = {
  clientType: '', // 'blog' or 'brand'
  registrationStep: 0,
  verifay: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  reducers: {
    setClientType: (state, action) => {
      state.clientType = action.payload;
    },
    setRegistrationStep: (state, action) => {
      state.registrationStep = action.payload;
    },
  },
  //   extraReducers: builder => {
  //     builder.addCase(register.fulfilled, (state, { payload }) => {
  //       state.clientType = payload;
  //     });
  //   },
});

export const { setClientType, setRegistrationStep } = authSlice.actions;
export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// import { fetchBlogPosts } from './blogOperations';

// const initialState = {
//   blogPosts: [],
// };

// const blogSlice = createSlice({
//   name: 'blog',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(fetchBlogPosts.fulfilled, (state, { payload }) => {
//       state.blogPosts = payload;
//     });
//   },
// });

// export const selectBlogState = state => state.blog.blogPosts;

// export default blogSlice.reducer;
