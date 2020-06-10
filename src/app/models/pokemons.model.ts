export class Pokemons {
    /* Attributs de classe */
    count: number;
    next: string;
    previous: string;
    results: [ { name: string, url: string } ]

    /* Constructeur de classe */
    constructor(count: number, next: string, previous:string, results: [ { name: string, url: string } ]) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}
