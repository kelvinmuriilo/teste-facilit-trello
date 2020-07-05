export interface Board {
    id: number,
    title: string,
    columns: Column[]
}

export interface Column {
    id: number,
    title: string,
    cards: Card[]     
}

export interface Card {
    id: number,
    title: string,
    tags: any[],
    members: Member[]
}

export interface Member {
    id: number,
    name: string,
    photoURL: string
}