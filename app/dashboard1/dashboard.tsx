type props = {
    title: string,
    value:string 
};

function Dashboard1({title,value}:props) {
    return ( 
        <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
            <p className="ml-2 text-2xl font-bold text-purple-600">{value}</p>
        </div>
     );
}

export default Dashboard1;