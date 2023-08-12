import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre:String='';
  usuario={
    usr:'',
    pw:'',
  }


  constructor() { }
  onSubmitTemplate(){
    console.log('Form submit');
    console.log(this.usuario);
  }

  ngOnInit() {
  }

}
