import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="min-h-screen bg-gray-100 py-10">
      <Container>
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-md md:p-10">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Edit Post</h1>

          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : null;
}

export default EditPost;
