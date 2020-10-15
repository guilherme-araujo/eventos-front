import fetcher from './fetcher'

export async function getCountryList(){
    return fetcher("https://bioinfo.imd.ufrn.br/backend-eventos/countries")
}

export async function getStateList(){
    return fetcher("https://bioinfo.imd.ufrn.br/backend-eventos/states")
}

export async function getCityList(id){
    return fetcher(`https://bioinfo.imd.ufrn.br/backend-eventos/cities?state=`+id)
}