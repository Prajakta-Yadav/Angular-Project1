import { Component, inject } from '@angular/core';
import { AccountService } from '../../Services/account-service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {

  loginObj : any = {
    username: '',
    password : '' 
  }; 

  /**
   * private fb = inject(FormBuilder); 


  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  }); 
   */


  constructor(private accountService: AccountService, private route: Router){}

  onLogin(){
    debugger

    this.accountService.onLogin(this.loginObj).subscribe((res: any) => {
      debugger
      console.log('res', res)
      localStorage.setItem('token', res.token)

      this.route.navigate(['admin-dashboard']); 
    })

  }



  
}
