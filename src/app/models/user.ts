import { AnonymousSubject } from "rxjs/internal/Subject";

const ANONYMOUS_USER: User = {
    id: "0",
    tenant: "null",
    name: "Anonymous user",
    enabled: true,
    permissions: []
}

interface Permission {
    description: string;
    scope: string;
    roles: Array<string>;
}

interface User {
    id: string;
    tenant: string;
    name: string;
    enabled: boolean;
    permissions: Permission[];
}

export { ANONYMOUS_USER, User };