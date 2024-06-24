import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userData: any;

  constructor(
    public auth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit() {
    const storage = await this.storage.create();
    this.storage = storage;
  }

  async login() {
    await this.authService.login();
  }

  async setRole(role: string) {
    await this.authService.setRole(role);
  }

  async getRole() {
    await this.authService.getRole();
  }

  logout() {
    this.authService.logout();
  }
}
