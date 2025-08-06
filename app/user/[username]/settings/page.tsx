type settingsprops = {
    params:{
        username:string;
    };
};

function usersettings({params}:settingsprops) {
    return ( 
        <main className="p-6">
            <h1>User settings</h1>
            <p className="text-lg mt-2">username: <code>{params.username}</code></p>

        </main>
     );
}

export default usersettings;