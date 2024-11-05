interface film {    
    id: number,
    titre : string,
    director : string,
    duree : number,
    image ?: string,
    description ?: string,
    budget ?: number
}

export type { film };