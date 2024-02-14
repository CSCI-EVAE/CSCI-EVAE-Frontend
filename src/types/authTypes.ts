export interface LoginCredentials {
    username: string;
    password: string;
}
export interface AuthResponse {
    message: string;
    data: {
        accessToken: string;
        user: User;
    };
    success: boolean;
}


export interface InfosGenerales {
    promotion: string;
    designation: string;
    formation: string;
    ue: string;
    ec: string; 
    
}

export interface ResponseInfoGenerales {
    message: string;
    data: {
        evaluation: string;
        user: User;
    };
    success: boolean;
}

export interface User {
    id: number;
    username: string;
    email: string;
    nom: string;
    prenom: string;
    roles: string[];
}
