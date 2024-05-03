import BlogCard from "../component/BlogCard";
import NavBar from "../component/NavBar";

function Index() {
  return (
    <div className="container">
      <NavBar />
      {/* <BlogItem /> */}

      <div className="container max-w-3xl mx-auto space-y-8 mt-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default Index;
