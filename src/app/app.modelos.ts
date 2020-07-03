export interface Board {
    id: number,
    title: string,
    columns: Column[]
}

export interface Column {
    id: number,
    title: string,
    cards: Cards[]     
}

export interface Cards {
    id: number,
    title: string,
    tags: string[]
}

export interface Member {
    id: number,
    name: string,
    photoURL: string
}