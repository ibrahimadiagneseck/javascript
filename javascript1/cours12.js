// array des objets
const blogs = [
    {
        id: 1, 
        titre: 'titre1', 
        contenu: 'describtion1', 
        likes: 10
    },
    {
        id: 2, 
        titre: 'titre2', 
        contenu: 'describtion2', 
        likes: 20
    },
    {
        id: 3, 
        titre: 'titre3', 
        contenu: 'describtion3', 
        likes: 30
    },
];


blogs.forEach( (blog)=> {
    console.log(`${blog.id}- ${blog.titre}- ${blog.contenu}- ${blog.likes}`);
});

