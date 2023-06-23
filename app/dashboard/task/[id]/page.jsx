"use client";

async function getTask(id) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`);
  console.log("ENDPOINT", `http://localhost:3000/api/post/${id}`);
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
const Task = async (id) => {
  const task = await getTask(1);

  return (
    <div className="flex space-between items-center border border-gray-200 rounded-lg py-4 px-6 my-6">
      <div key={task.id} className="w-full">
        <h1 className="text-2xl mb-2">{task.title}</h1>
        <p className="text-md">{task.content}</p>
      </div>
      <button className="cursor-pointer bg-red-700 px-6 py-2 rounded-full">
        DELETE
      </button>
    </div>
  );
};

export default Task;
