import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-4 min-h-screen max-w-6xl mx-auto">
      <Sidebar className=" w-full" />
      <div
        className="col-span-4 lg:col-span-3 border-[2px] border-gray-200
      ml-[100px] lg:ml-[300px] max-w-xl lg:min-w-[550px]"
      >
        <Feed />
      </div>
    </main>
  );
}
