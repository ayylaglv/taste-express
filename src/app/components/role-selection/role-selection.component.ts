// role-selection.page.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.page.html',
  styleUrls: ['./role-selection.page.scss'],
})
export class RoleSelectionPage {
  constructor(private authService: AuthService) {}

  selectRole(role: string) {
    this.authService.setRole(role);
  }
}
