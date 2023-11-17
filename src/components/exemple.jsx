import { useEffect, useState } from "react";

function Example(){
    const [dataFromServer,  setDataFromServer] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch ("http://youtube.com", {method: "GET"});
            const data = response.json();
            setDataFromServer(data);
        };
        getData();
    }, []);

    return <div>{dataFromServer.title}</div>
}

export default Example;
