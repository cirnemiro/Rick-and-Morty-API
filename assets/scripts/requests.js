import { printAside } from "./aside/aside.js";


export const getEpisodes = ()=> {
    axios.get('https://rickandmortyapi.com/api/episode').then((response)=>{
        console.log(response);
        printAside(response)
    })
}