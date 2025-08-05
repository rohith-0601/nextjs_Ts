type blogPageProps = {
    params:{
        name:string;
    };
};

function Blogpost({params}:blogPageProps) {
    return ( 
        <main className="p-6">
            <h1 className="text-3xl font-bold">Blog Post</h1>
            <p>Name: <code>{params.name}</code></p>
        </main>
     );
}

export default Blogpost;