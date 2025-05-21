import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!user(); else loggendIn">
    <h2>Iniciar Sesion con Google</h2>
    <button (click)="login()" >Inciar Sesion</button>
</div>

<ng-template #loggendIn>
    <h3>Hola, {{user()?.displayName}} </h3>
    <br>
    <img [src]="user()?.photoURL" />
    <br>
    <p>{{user()?.email}} </p>
    <button (click)="logout()">Cerrar Sesion</button>

</ng-template>
  `

})
export class LoginComponent {
  private auth = inject(Auth);
  user = signal<any | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, (u) => this.user.set(u));
  }

  login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider).catch(err => alert(err.message));
  }

  logout() {
    signOut(this.auth);
  }
}
