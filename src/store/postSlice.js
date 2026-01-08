import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appwriteService from "../appwrite/config";

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await appwriteService.getPosts();
      return res.documents;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (slug, { rejectWithValue }) => {
    try {
      return await appwriteService.getPost(slug);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  "post/deletePost",
  async ({ postId, fileId }, { rejectWithValue }) => {
    try {
      await appwriteService.deletePost(postId);
      await appwriteService.deleteFile(fileId);
      return postId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.post = null;
    },
    clearPosts: (state) => {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.loading = false;
        state.post = null;
      })
      .addCase(deletePostThunk.fulfilled, (state) => {
        state.post = null;
      });
  },
});

export const { clearPost, clearPosts } = postSlice.actions;
export default postSlice.reducer;
