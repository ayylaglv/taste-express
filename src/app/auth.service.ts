import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom } from 'rxjs';

import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) {}

  async login() {
    const result = await this.auth.signInWithPopup(new GoogleAuthProvider());
    this.userData = result.user;
    this.router.navigate(['role-selection']);
    // this.userService.saveUser(this.userData);
    if (this.userData) {
      const userRef = this.firestore.collection('users').doc(this.userData.uid);
      const doc: any = await lastValueFrom(
        this.firestore.collection('users').doc(this.userData.uid).get()
      );
      if (!doc.exists) {
        await userRef.set({ role: null });
        this.router.navigate(['role-selection']);
      } else {
        const role = doc.data()?.role;
        this.router.navigate([role === 'business' ? 'business' : 'customer']);
      }
    }
  }

  async setRole(role: string) {
    const user = await this.auth.currentUser;
    if (user) {
      await this.firestore.collection('users').doc(user.uid).set({ role });
      this.router.navigate([role === 'business' ? 'business' : 'customer']);
    }
  }

  async getRole() {
    const user = await this.auth.currentUser;
    if (user) {
      const doc: any = await lastValueFrom(
        this.firestore.collection('users').doc(user.uid).get()
      );
      return doc.data()?.role;
    }
    return null;
  }

  logout() {
    this.userData = null;
    this.auth.signOut();
  }
}
