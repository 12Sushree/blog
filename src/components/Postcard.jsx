import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group block">
      <div
        className="
          w-full
          bg-white
          rounded-2xl
          p-4
          border border-gray-200
          shadow-sm
          transition-all
          duration-300
          hover:shadow-lg
          hover:-translate-y-1
        "
      >
        <div className="w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="
              w-full
              h-48
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </div>

        <h2
          className="
            text-lg
            font-semibold
            text-gray-800
            line-clamp-2
            group-hover:text-blue-600
            transition-colors
          "
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
