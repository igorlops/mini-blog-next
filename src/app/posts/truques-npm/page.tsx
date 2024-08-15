import PostBody from "@/app/ui/components/PostBody/PostBody";

export default function TruquesNpm() {
    return (
        <>
            <PostBody post={
                {
                    id: '2',
                    title: 'Como evoluir em sua carreira da forma correta?',
                    slug: 'comandos-git',
                    description: "Confira nesse artigo alguns pilares para te ajudar a construir uma carreira de sucesso na área de tecnologia.",
                    picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2024/03/evoluir-carreira-TI-min.png',
                    content: <p>Lorem ipsum dolor 
                    sit amet consectetur, adipisicing elit. 
                    Fugit culpa distinctio assumenda eligendi
                    nulla obcaecati numquam ipsa adipisci qui, 
                    minima modi iusto quae debitis, 
                    libero quod molestias saepe ipsum repellat.</p>
                }
            }
            />
        </>
    )
}