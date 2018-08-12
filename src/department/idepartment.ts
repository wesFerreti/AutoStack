import { IRole } from "../role/irole";

export interface IDepartment {
    name: string;
    roles: IRole[];
    id: number;
}

