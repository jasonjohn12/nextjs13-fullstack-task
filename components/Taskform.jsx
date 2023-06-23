"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Taskform = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/post", {
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    console.log("response", response);
    router.refresh();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center  flex-col"
    >
      <label className="text-lg mb-2">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className=" bg-gray-700 rounded-md h-12 w-3/4 md:w-1/2 mb-8 outline-none"
      />
      <label className="text-lg mb-2">Content</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="bg-gray-700 rounded-md h-12 w-3/4 md:w-1/2"
      />
      <button className="bg-blue-800 px-6 py-4 rounded-full mt-6 w-3/4 md:w-1/2 outline-none">
        Submit
      </button>
    </form>
  );
};

export default Taskform;
