import { AnonymousSubject } from "rxjs/internal/Subject";

const ANONYMOUS_USER: User = {
    id: "0",
    tenant: "null",
    name: "Anonymous user",
    enabled: true,
    roles: []
}

interface User {
    id: string;
    tenant: string;
    name: string;
    enabled: boolean;
    roles: Array<string>;
}

export { ANONYMOUS_USER, User };