import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex() {
    const posts: BlogPost[] = [
        {
            id: '2',
            title: 'Como evoluir em sua carreira da forma correta?',
            slug: 'comandos-git',
            description: "Confira nesse artigo alguns pilares para te ajudar a construir uma carreira de sucesso na área de tecnologia.",
            picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2024/03/evoluir-carreira-TI-min.png',
        },
        
        {
            id: '1',
            title: 'Como melhorar seu networking na área de TI',
            slug: 'truques-npm',
            description:'Veja neste artigo algumas dicas para melhorar seu networking e alcançar melhores resultados na sua carreira.',
            picture:
            'https://dkrn4sk0rn31v.cloudfront.net/uploads/2018/10/11144157/NETWORKING.png',
        }
    ];
    
    return { posts };
}