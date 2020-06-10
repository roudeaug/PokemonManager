export class Pokemon {
    /* Attributs de classe (descrpition des données reçues par PokeAPI au format JSON) */
    abilities: Array<Object>;
    baseExperience: number;
    forms: Array<Object>;
    gameIndices: Array<Object>;
    height: number;
    heldItems: Array<Object>;
    id: number;
    isDefault: boolean;
    locationAreaEncounters: string;
    moves: Array<Object>;
    name: string;
    order: number;
    species:{};
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    };
    stats: Array<Object>;
    types: [{
        indice: [{
            slot: number;
            type: [{
                name: string;
                url: string;
            }]
        }]
    }];
    weight: number;

    /* Constructeur de classe */
    constructor() {}
}