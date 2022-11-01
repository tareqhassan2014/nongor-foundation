import bcrypt from 'bcrypt';

// create a class for password and use it in the backend
export class Password {
    static async toHash(password: string) {
        return await bcrypt.hash(password, 12);
    }

    static async compare(storedPassword: string, suppliedPassword: string) {
        return await bcrypt.compare(suppliedPassword, storedPassword);
    }
}
