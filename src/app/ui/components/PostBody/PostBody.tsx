import { BlogPost } from "@/data/@types/BlogPostInterface";
import styles from './PostBody.module.css'
import Link from "next/link";
export default function PostBody({post}:{post:BlogPost}) {
    return (
        <>
            <Link href={'/'}>Voltar</Link>
            <div className={styles.postContainer}>
                <h2 className={styles.postTitle}>
                    {post.title}
                </h2>
                <img className={styles.postPicture} src={post.picture} alt={post.title} />
                <div className={styles.postContent}>{post.content}</div>
            </div>
        </>
    )
}