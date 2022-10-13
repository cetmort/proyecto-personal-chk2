import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import StorageHelper from '../libs/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  
  login(username: string, password:string): Observable<any>{
    return this.http.post('http://ec2-18-188-194-42.us-east-2.compute.amazonaws.com:4001/api/login',{
      username,
      password
    })
  }

  refreshToken(){
    return this.http.post('http://ec2-18-188-194-42.us-east-2.compute.amazonaws.com:4001/api/refresh',{
      session: StorageHelper.getItem('session')
    })
  }
  
  searchPokemon(name: string){
    return this.http.post('http://ec2-18-188-194-42.us-east-2.compute.amazonaws.com:4001/mirror/pokemon',{
      endpoint: "pokemon/"+name
    })
  }
}
