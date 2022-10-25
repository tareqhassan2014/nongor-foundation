import jwt, { Algorithm } from 'jsonwebtoken';

// create a token class
export class Token {
    private static readonly secret: string = process.env.JWT_SECRET as string;
    private static readonly algorithm: Algorithm = 'HS256';
    private static readonly expiresIn: string = process.env
        .JWT_EXPIRES_IN as string;

    constructor() {}

    public static sign(payload: any): string {
        return jwt.sign(payload, this.secret, {
            expiresIn: this.expiresIn,
            algorithm: this.algorithm,
        });
    }

    public static verify(token: string): any {
        return jwt.verify(token, this.secret, {
            algorithms: [this.algorithm],
        });
    }
}
