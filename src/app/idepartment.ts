import { IRole } from "./irole";

export interface IDepartment {
    name: string;
    roles: IRole[];
    id: number;
}

