interface LoginRequest {
    password: string;
    email: string;
}

interface AuthResponse {
    status: number;
    message: string;
    user: User;
}

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    avatar: string;
    token: string;
}

interface SignUpRequest {
    phone: string;
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

interface ForgetPassword {
    email: string;
}

interface Address {
    id: string | null;
    country: string;
    state: string;
    city: string;
    street: string;
    zip: string;
    division: string;
    district: string;
    upazila: string;
    union: string;
    village: string;
    type: 'PRESENT' | 'PERMANENT';
}

interface Contact {
    id: string | null;
    createdAt: string;
    updatedAt: string;
    phone: string;
    whatsapp: string;
    email: string;
    imo: string;
    viber: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    skype: string;
    website: string;
    page: string;
    github: string;
    userId: string;
}

interface Degree {
    id: string | null;
    degree: string;
    institute: string;
    passingYear: date | string;
    GPA: number;
}

interface GetMeResponse {
    status: number;
    message: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        avatar: string;
        token: string;

        contact: Contact[];
        address: Address[];
        degree: Degree[];
    };
}

interface IdToken {
    idToken: string;
}
