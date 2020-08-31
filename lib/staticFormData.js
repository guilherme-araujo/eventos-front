import fetcher from './fetcher'

export async function getCountryList(){
    return fetcher("http://localhost:3333/countries")
}

export async function getStateList(){
    return fetcher("http://localhost:3333/states")
}