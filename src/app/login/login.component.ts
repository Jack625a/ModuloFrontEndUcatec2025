import { Component,inject, signal} from '@angular/core';
//Importar las dependencias
import { CommonModule } from '@angular/common';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "@angular/fire/auth";



@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //estructura de la sesion
  private auth=getAuth();
  user=signal<any|null>(null);
  constructor(){
    onAuthStateChanged(this.auth, (u)=>this.user.set(u));
  }
  login(){
    const proveedor=new GoogleAuthProvider();
    signInWithPopup(this.auth,proveedor).catch(error =>
      alert(error.message)
    );
  }

  logout(){
    signOut(this.auth);
  }
}
