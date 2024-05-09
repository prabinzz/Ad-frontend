import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogState {
  blogs: Blog[];
}

const initialState: BlogState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
   setBlogs(state, action: PayloadAction<Blog[]>){
      state.blogs = action.payload;
    }
  },
});

export const { setBlogs } = blogSlice.actions;
export default blogSlice.reducer;