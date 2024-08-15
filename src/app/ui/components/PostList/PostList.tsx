import { BlogPost } from "@/data/@types/BlogPostInterface";
import styles from './PostList.module.css'
import Link from "next/link";


export default function PostList({ posts }: {posts: BlogPost[]}){
    return (
        <ul className={styles.postList}>
            { posts.map((post) => (
                <PostListItem post={post} key={post.id}/>
            )) }
        </ul>
    )
}

export function PostListItem({post}:{post:BlogPost}) {
    return (
        <li className={styles.postListItem}>
            <Link href={`posts/${post.slug}`}>
                <img src={post.picture} alt={post.title} className={styles.postPicture} />
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p>{post.description}</p>
            </Link>
        </li>
    )
}   