import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";

export default async function Home() {
  async function getData() {
    const res = await fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    // who to follow section
    const randomUsersResults = await fetch(
      "https://randomuser.me/api/?results=30&inc=name,login,picture"
    );
    const randomUsersData = await randomUsersResults.json();

    return {
      data: data,
      randomUsersData: randomUsersData,
    };
  }

  const newsResults = await getData();

  return (
    <main
      className="grid grid-cols-4 min-h-screen max-w-6xl mx-auto
      "
    >
      <Sidebar className=" w-full" />
      <div
        className="col-span-4 lg:col-span-3 border-[2px] border-gray-200
          dark:border-gray-700
        ml-[100px] lg:ml-[300px] max-w-xl lg:min-w-[550px]"
      >
        <Feed />
      </div>
      <Widgets
        newsResults={newsResults.data.articles}
        randomUsersResults={newsResults.randomUsersData.results}
      />
    </main>
  );
}
