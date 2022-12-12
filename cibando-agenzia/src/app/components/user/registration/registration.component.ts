import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CustomValidator } from '../customValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrazioneOk = false;

  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl('', [Validators.requiredTrue])
  },
  [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  )

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value)
    const user = {
      nome: this.form.value.nome,
      email: this.form.value.email
    }
    this.userService.datiUtente.next(user);
    this.registrazioneOk = true;
  }


}
