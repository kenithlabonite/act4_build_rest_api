export interface User {
    username: string;
    password: string;
    email: string;
}

export interface UnitUser extends User {
    id: string;
}

export interface User {
    [key: string] : UnitUser
}