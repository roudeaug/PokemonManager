export class Pokemon {
    /* Attributs de classe */
    id: string;
    img: string;
    name: string;
    category: string;
    types: Array<string>;
    size: number;
    weight: number;

    /* Constructeur de classe */
    constructor( id: string, img: string, name: string, category: string, types: Array<string>, size: number, weight: number) {
        this.id = id;
        this.img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+img;
        this.name = name;
        this.category = category;
        this.types = types;
        this.size = size;
        this.weight = weight;
    }
}