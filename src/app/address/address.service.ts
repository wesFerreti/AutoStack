import { Injectable } from '@angular/core';
import { Iaddress } from './iaddress';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class addressService {
  response;
  address:Iaddress = {
    postCode:null,
    street:null,
    adNumber:null,
    complement:null,
    uf:null,
    city:null,
    block:null
  }

  
  constructor(private http: HttpClient) { }

  public getAddressByPostCode(postCode:number):Observable<Iaddress>{
    this.http.get<any>("https://viacep.com.br/ws/"+postCode+"/json/");
    return this.http.get<Iaddress>("https://viacep.com.br/ws/"+postCode+"/json/");
  }
  public getDefaultAddress():Iaddress{
    return this.address;
  }


  public newAddress(address:Iaddress):Iaddress{

  //http new address
  return this.address;
  }



}