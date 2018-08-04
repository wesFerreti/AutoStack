import { Injectable } from '@angular/core';
import { IRole } from './irole';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roles:IRole[];

  constructor() { }

  getRolesEng():IRole[]{  
    this.roles = [
      {'name':'Analista de sistemas junior'},
      {'name':'Analista de sistemas pleno'},
      {'name':'Analista de sistemas senior'}
    ];
    return this.roles;  
  }

  getRolesAdm():IRole[]{
    this.roles = [
      {'name':'Analista de adm'},
      {'name':'Auxiliar'},
      {'name':'Gerente'}
    ];

    return this.roles;

  }
}
