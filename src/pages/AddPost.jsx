import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Container>
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-md md:p-10">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">
            Create New Post
          </h1>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
