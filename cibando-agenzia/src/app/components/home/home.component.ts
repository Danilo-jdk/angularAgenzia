import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //@ViewChild('modaleUno', { static: true }) modal: ElementRef;
  nome: string;
  email: string;


  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.datiUtente.subscribe(
      (res: any) => {
        // localStorage.setItem('nome', res.nome);
        // localStorage.setItem('email', res.email);
        this.nome = res.nome;
        this.email = res.email;
        // if(res){
        //   this.open(this.modal);
        // }

      }
    )

    // if (localStorage.getItem('nome')){
    //   this.nome = localStorage.getItem('nome');
    //   this.email = localStorage.getItem('email');
    //   this.open(this.modal);
    // }

  }

  // open(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal', size: 'lg', centered: true}).result.then(
  //     (result) => {
  //       console.log('azione da eseguire')
  //     }
  //   ).catch((res) => {
  //     //localStorage.clear();
  //     // localStorage.removeItem('nome');
  //     // localStorage.removeItem('email');
  //     this.nome = '';
  //     this.email = '';
  //   })
  // }

  closeModal(){
    this.nome = '';
    this.email = '';
  }
}
