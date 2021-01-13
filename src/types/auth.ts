export interface AuthRequest {
    email: string;
    username: string;
    password: string;
}

export enum AuthError {
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    WRONG_PASSWORD = 'WRONG_PASSWORD',
    HAS_ACCOUNT = 'HAS_ACCOUNT',
    USERNAME_USED = 'USERNAME_USED',
    EMAIL_NOT_CONFIRMED = 'EMAIL_NOT_CONFIRMED',
    EMAIL_NOT_SENT = 'EMAIL_NOT_SENT',
    FAILED = 'FAILED',
}

export enum FormError {
    MISSING_EMAIL = 'MISSING_EMAIL',
    MISSING_PASSWORD = 'MISSING_PASSWORD',
    PASSWORD_MISMATCH = 'PASSWORD_MISMATCH',
    INVALID_EMAIL = 'INVALID_EMAIL',
    MISSING_PASSWORD_AGAIN = 'MISSING_PASSWORD_AGAIN',
}
