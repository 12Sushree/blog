import React, { useEffect } from "react";
import { Container, PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postSlice";

function AllPosts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-10 flex items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Container>
        <h1 className="mb-8 text-2xl font-bold text-gray-900">All Posts</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
