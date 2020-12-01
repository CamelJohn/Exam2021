import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email:string, password:string){
    this.afAuth
        .signInWithEmailAndPassword(email,password)
        .then(res => {
          console.log(res);
          this.router.navigate(['/books']); 
        }
        )
  }


  constructor(private afAuth:AngularFireAuth, private router:Router) { }
}
