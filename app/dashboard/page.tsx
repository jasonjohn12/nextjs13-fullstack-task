import Link from "next/link";
import TaskForm from "../../components/Taskform";
type Props = {};

async function getTasks() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
// async function generateMetadata() {
//   const tasks = await getTasks();
//   // The params to pre-render the page with.
//   // Without this, the page will be rendered at runtime
//   return tasks.map((task: any) => ({ params: { title: task.title } }));
// }
const Dashboard = async (props: Props) => {
  const posts = await getTasks();

  return (
    <div className="container mx-auto w-full ">
      <h2>POSTS</h2>
      <TaskForm />
      {posts.map((task: any) => (
        <Link href={`dashboard/task/${task.id}`}>
          <div className="flex space-between items-center border border-gray-200 rounded-lg py-4 px-6 my-6">
            <div key={task.id} className="w-full">
              <h1 className="text-2xl mb-2">{task.title}</h1>
              <p className="text-md">{task.content}</p>
            </div>
            <button className="cursor-pointer bg-red-700 px-6 py-2 rounded-full">
              DELETE
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;
