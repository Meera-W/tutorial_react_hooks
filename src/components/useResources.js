import React, {useState, useEffect} from 'react';
import axios from "axios";


// custom React Hook
const useResources = (resourceName) => {

    const [resources, setResources] = useState([]);

    const fetchResources = async(resourceName) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
        //  resources = response.data 
        setResources(response.data);
    }

    useEffect(() => {
        fetchResources(resourceName)
    }, [resourceName])

    return resources;

}

export default useResources;