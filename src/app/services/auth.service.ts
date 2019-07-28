import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    
   }

   onSubmit(userData){
     sessionStorage.setItem("userData",JSON.stringify(userData));
   }
}
