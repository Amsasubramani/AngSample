import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

user:string= '';
password:string='';
errmsg:string='';

constructor(private router: Router){

}
loginvalidate(){
  this.errmsg='';
  if(this.user=='amsa '&& this.password=='amsa123')
  {
    this.router.navigate(['/home']);
  }
  else{
    this.errmsg="invalid username or password";
  }
}
}