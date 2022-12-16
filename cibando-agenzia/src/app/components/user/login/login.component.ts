
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  user: any;
  loginError: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    if (form.email != '' && form.password != '') {
      this.authService.login(form.email, form.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res) {
            this.authService.saveStorage(res);
            this.router.navigate(['home']);
          } else {
            this.loginError = "Email o password errati!";
            this.messageService.add({severity: 'error', summary: 'Errore', detail: 'Email o password errati!', life:3000})
          }
        },
        error: (err) => {
          console.log(err);
          this.loginError = "Email o password errati!";
          this.messageService.add({severity: 'error', summary: 'Errore', detail: 'Email o password errati!', life:3000})
        }
      })
    }
  }
}
