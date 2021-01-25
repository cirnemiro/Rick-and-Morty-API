import { hiddeAside } from "../aside/aside.js"
import { getEpisodeCharactersPhoto } from "../requests.js"

export const printEpisodeInfo = (response)=>{
    hiddeAside()
    const $title = document.querySelector('.main_episode_header__title')
    $title.textContent = `${response.data.episode.slice(1,3)}x${response.data.episode.slice(4,6)} - ${response.data.name}`

    const $date = document.querySelector('.main_episode_header__date')
    $date.textContent = `${response.data.created.slice(0,10)}`

    const $gridPhotos = document.querySelector('.main_episode__content')
    $gridPhotos.innerHTML = ''

    console.log(response.data.characters);
    response.data.characters.forEach(e => {
        
        getEpisodeCharactersPhoto(e)
    });
}

export const printEpisodePhotos = (data)=>{
    const $gridPhotos = document.querySelector('.main_episode__content')
    const divElement = document.createElement('div')
    const divPhoto = document.createElement('div')
    const divData =  document.createElement('div')

    

    divElement.classList.add('main_episode_content__element')

    divPhoto.style.backgroundImage = `url('${data.image}')`
    divPhoto.classList.add('main_episode_content_element__photo')

    console.log(data);
    divData.textContent = data.name
    divData.classList.add('main_episode_content_element__data')

    divElement.appendChild(divPhoto)
    divElement.appendChild(divData)

    $gridPhotos.appendChild(divElement)
}