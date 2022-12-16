import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  user: any;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(JSON.parse(localStorage.getItem('user')) != null){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.user = null;
  }

}
