import { printAside } from "./aside/aside.js";
import { printEpisodeInfo, printEpisodePhotos } from "./main/mainContainer.js";

export let seasons = {
    season1 : [],
    season2: [],
    season3 : [],
    season4 : []
}
let position = 'https://rickandmortyapi.com/api/episode'





export const getEpisodes = ()=> {
    axios.get(`${position}`).then((response)=>{
        response.data.results.forEach(e => {
            if (e.episode.match('^S01')) {
                seasons.season1.push(e)
            }
            if (e.episode.match('^S02')) {
                seasons.season2.push(e)  
            }
            if (e.episode.match('^S03')) {
                seasons.season3.push(e)  
            }
            if (e.episode.match('^S04')) {
                seasons.season4.push(e)  
            }
        });
        
        if (response.data.info.next) {
            position = response.data.info.next
            getEpisodes()  
        }else{
            printAside(1)
        }
    })
}

export const getEpisodeInfo = (url)=>{
    axios.get(url).then((response)=>{
        printEpisodeInfo(response)
    })
}

export const getEpisodeCharactersPhoto = (url)=>{
    axios.get(url).then((response)=>{
        printEpisodePhotos(response.data)
    })
}