const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=343a2b66efd83955817aadb652a0bc93&page=1"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie/popular?api_key=343a2b66efd83955817aadb652a0bc93&query="'

const form = document.getElementById("form")
const search = document.getElementById("search")


getMovies(API_URL) 

async function getMovies(url) { 
    const res = await fetch(url)
    const data = await res.json ()

    showMovies(data.results)
}

form.addEventListener("submit",(e) => { 
    e.preventDefault

    const searchTerm = search.value 

    if(searchTerm && searchTerm !== "") { 
        getMovies(SEARCH_API + searchTerm)
        search.value = ""
    }else   {
        window.location.reload()
    }
})