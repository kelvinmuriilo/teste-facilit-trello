export class Board {
    id: number;
    title: string;
    columns: Column[] = [];
}

export class Column {
    displayAction: boolean;
    id: number;
    title: string;
    cards: Card[] = [];    
}

export class Card {
    id: number;
    title: string;
    tags: string[] = [];
    members: Member[] =[];
}

export class Member {
    id: number;
    name: string;
    photoURL: string;
}