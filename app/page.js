import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-4 min-h-screen max-w-6xl mx-auto">
      <Sidebar className="col-span-1 w-full" />
      <div className="col-span-2 bg-gray-400"></div>
      <div className="col-span-1 bg-gray-300"></div>
    </main>
  );
}
