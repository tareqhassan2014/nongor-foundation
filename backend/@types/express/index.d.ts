declare namespace Express {
    export interface Request {
        user?: user;
    }
}

interface user {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    lastDonation: Date;
    bloodType: string;
    avatar: string;
}
