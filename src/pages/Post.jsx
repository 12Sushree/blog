import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, deletePostThunk, clearPost } from "../store/postSlice";
import appwriteService from "../appwrite/config";

export default function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { post, loading } = useSelector((state) => state.post);
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (!slug) return navigate("/");
    dispatch(fetchPost(slug));

    return () => {
      dispatch(clearPost());
    };
  }, [slug, dispatch, navigate]);

  const deletePost = () => {
    dispatch(
      deletePostThunk({
        postId: post.$id,
        fileId: post.featuredImage,
      })
    ).then(() => navigate("/"));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading post...</p>
      </div>
    );
  }

  return post ? (
    <div className="min-h-screen bg-gray-100 py-10">
      <Container>
        <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-md md:p-10">
          <div className="relative mb-6 overflow-hidden rounded-xl border">
            <img
              src={appwriteService.getFileView(post.featuredImage)}
              alt={post.title}
              className="w-full max-h-[420px] object-cover"
            />

            {isAuthor && (
              <div className="absolute right-4 top-4 flex gap-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-green-500"
                    className="px-4 py-1.5 text-sm"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-500"
                  className="px-4 py-1.5 text-sm"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          <h1 className="mb-6 text-3xl font-bold text-gray-900">
            {post.title}
          </h1>

          <div className="prose max-w-none prose-gray">
            {parse(post.content)}
          </div>
        </article>
      </Container>
    </div>
  ) : null;
}
