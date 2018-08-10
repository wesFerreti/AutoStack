import { Injectable } from '@angular/core';
import { IRole } from './irole';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roles: IRole[];

  constructor() { }

  getRolesEng(): IRole[] {
    this.roles = [
      { 'name': 'Analista de sistemas junior', 'id': 1 },
      { 'name': 'Analista de sistemas pleno', 'id': 2 },
      { 'name': 'Analista de sistemas senior', 'id': 3 }
    ];
    return this.roles;
  }

  getRolesAdm(): IRole[] {
    this.roles = [
      { 'name': 'Analista de adm', 'id': 5 },
      { 'name': 'Auxiliar', 'id': 6 },
      { 'name': 'Gerente', 'id': 7 }
    ];

    return this.roles;

  }

  getRolesByDepartmentName(departmentName: string) {
    if (departmentName == "Engenharia") {
      return this.getRolesEng();
    } else {
      return this.getRolesAdm();
    }

  }

  getRoleIdByName(roleName: string): number {
    console.log(roleName);
    if (roleName == "Analista de sistemas junior") {
      return 1
    } else {
      return 2
    };

  }
}
