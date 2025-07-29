import { Component, inject, signal } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TestApp');
  private readonly afAuth: AngularFireAuth = inject(AngularFireAuth);

  public constructor() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account', redirect_uri: window.location.host });
    this.afAuth.signInWithRedirect(provider);
  }
}
