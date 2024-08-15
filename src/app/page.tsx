import { BlogPost } from "@/data/@types/BlogPostInterface";
import useIndex from "@/data/hooks/pages/useIndex.page";
import Image from "next/image";
import PostList from "./ui/components/PostList/PostList";

export default function Home() {
  const {posts} = useIndex(); 
  return (
    <>
      <h1>Lista de posts</h1>
      <PostList posts={posts}/>
    </>
  );
}
