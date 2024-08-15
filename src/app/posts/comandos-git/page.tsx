import PostBody from "@/app/ui/components/PostBody/PostBody";

export default function ComandosGit()
{
    return (
        <>
            <PostBody post={
                {
                    id: '2',
                    title: 'Como evoluir em sua carreira da forma correta?',
                    slug: 'comandos-git',
                    description: "Confira nesse artigo alguns pilares para te ajudar a construir uma carreira de sucesso na área de tecnologia.",
                    picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2024/03/evoluir-carreira-TI-min.png',
                    content: <h2>Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Soluta id inventore dolor. 
                    Nihil porro excepturi blanditiis, totam, 
                    deleniti laudantium autem, alias expedita 
                    earum voluptate pariatur! 
                    Pariatur possimus commodi praesentium hic!</h2>
                }
            }
            />
        </>
    )
}