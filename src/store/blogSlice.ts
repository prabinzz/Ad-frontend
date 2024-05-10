import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BlogState {
  blogs: Blog[];
  selectedBlog: Blog | null;
}

const initialState: BlogState = {
  blogs: [],
  selectedBlog: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
    selectBlog(state, action: PayloadAction<string>) {
      const blogId = action.payload;
      // Find the blog with the given ID from the `blogs` array
      const selectedBlog =
        state.blogs.find((blog) => blog.id === blogId) || null;
      state.selectedBlog = selectedBlog;
    },
  },
});

export const { setBlogs, selectBlog } = blogSlice.actions;
export default blogSlice.reducer;
