import { getEpisodeInfo, seasons } from '../requests.js'

export const showAside = ()=>{
    document.querySelector('.aside').style.left = '0px'
}
export const hiddeAside = ()=>{
    document.querySelector('.aside').style.left = '-100vw'
}

document.querySelector('.aside_header__select').addEventListener('change',()=>{
    printAside(document.querySelector('.aside_header__select').value)
})

const getEpisode = (data)=>{
    getEpisodeInfo(data)
}

export const printAside = (n)=>{
   
    const $asideList = document.querySelector('.aside__list')
    let season = `seasons.season${n}`
    $asideList.innerHTML=''
    
    eval(season).forEach(e => {
        const li = document.createElement('li')
        li.textContent = `${e.episode}`
        li.classList.add('aside_list__element')

        const divInfo = document.createElement('div')
        divInfo.classList.add('aside_list_element__info')
        divInfo.textContent = `${e.name}`

        li.appendChild(divInfo)
        $asideList.appendChild(li) 

        li.addEventListener('click', ()=>{
            getEpisode(e.url)
        })
    });  
}



