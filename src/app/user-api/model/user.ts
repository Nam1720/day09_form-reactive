export class User {
    id: number;
    title: string;
    category: string;

    constructor( id: number, name: string, category: string) {
        this.id = id;
        this.title = name;
        this.category = category;
    }
    
}