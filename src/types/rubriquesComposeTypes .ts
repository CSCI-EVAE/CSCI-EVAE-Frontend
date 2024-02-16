export interface RubriqueCompose {
    id?: number;
    designation: string;
    type: string;
    ordre:number;
    noEnseignant ?: {
        id : number
    }
}

export interface RubriqueComposeListResponse {
    message: string;
    data: RubriqueCompose[];
    success: boolean;
}
