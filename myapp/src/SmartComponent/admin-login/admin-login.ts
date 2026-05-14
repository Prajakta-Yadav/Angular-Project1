import { Component, inject } from '@angular/core';
import { AccountService } from '../../Services/account-service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { FormBuilder, FormControlName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})

export class AdminLogin {
  
  private fb = inject(FormBuilder); 


  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  }); 
   

  constructor(private accountService: AccountService, private route: Router){}

  onLogin(){
    debugger

    this.accountService.onLogin(this.form.value).subscribe((res: any) => {
      debugger
      console.log('res', res)
      localStorage.setItem('token', res.token)

      this.route.navigate(['admin-dashboard']); 
    })

  }
  
}
