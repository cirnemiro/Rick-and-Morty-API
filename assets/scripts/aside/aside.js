import { getEpisodes } from '../requests.js'

export const showAside = ()=>{
    console.log('hola');
    document.querySelector('.aside').style.left = '0px'
}
export const hiddeAside = ()=>{
    document.querySelector('.aside').style.left = '-100vw'
}
export const printAside = (response)=>{
    const $asideList = document.querySelector('.aside__list')
    console.log(response.data.results);
    response.data.results.forEach(e => {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.classList.add('aside_list_element__info')
        div.innerHTML = `
                <div</div>
            `
        li.textContent = `Episode ${e.id}`
        li.classList.add('aside_list__element')
        li.appendChild(div)
        $asideList.appendChild(li) 
    });
}
