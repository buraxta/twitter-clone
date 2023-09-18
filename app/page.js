import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-4 min-h-screen max-w-6xl mx-auto">
      <Sidebar className="col-span-1 w-full" />
      <div className="col-span-2 border-[2px] border-gray-200">
        <Feed />
      </div>
      <div className="col-span-1"></div>
    </main>
  );
}
