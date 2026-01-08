import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          className="
            inline-block
            text-sm
            font-medium
            text-gray-700
            pl-1
          "
        >
          {label}
        </label>
      )}

      <div
        className="
          rounded-xl
          border
          border-gray-200
          overflow-hidden
          focus-within:ring-2
          focus-within:ring-blue-500
          focus-within:border-blue-500
          transition
        "
      >
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey={conf.tinymceApiKey}
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style:
                  "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
