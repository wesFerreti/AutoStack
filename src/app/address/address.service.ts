import { Injectable } from '@angular/core';
import { Iaddress } from './iaddress';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class addressService {
  response;
  address: Iaddress = {
    postCode: null,
    street: null,
    adNumber: null,
    complement: null,
    uf: null,
    city: null,
    block: null
  }


  constructor(private http: HttpClient) { }

  public getAddressByPostCode(postCode: number): Observable<any> {
    return this.http.get<any>("https://viacep.com.br/ws/" + postCode + "/json/");
  }

  public getDefaultAddress(): Iaddress {
    return this.address;
  }

  public newAddress(address: Iaddress): Iaddress {
    //http new address
    return this.address;
  }






}