import {url, proxy} from '../config'
import {fetchCall} from '../utils/cach-fetch'

export default class Recipe{

    constructor(name) {

        this.name = name;
    };

    async getPokemon() {

        const response = await fetchCall(proxy+url+this.name);
        const data = await response.json();
        console.log(data);
        return data;

    }
}