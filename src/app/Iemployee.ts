import { IDepartment } from "./idepartment";
import { IRole } from "./irole";

export interface IEmployee {
    
    name: string;
    lastName: string;
    email: string;
    department: IDepartment;
    role: IRole;
    
}
