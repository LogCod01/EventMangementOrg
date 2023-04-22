import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { ToastrService } from 'ngx-toastr';





declare var gapi :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:any;
  password:any;
  user:any;
  UsersList:any;
  private auth:any;
  



  constructor(private service : EventService, private router : Router,private toastr: ToastrService){
    this.username;
    this.password;
    this.service.getAllUsers().subscribe((data:any)=> {
      console.log(data);
      this.UsersList=data;
    });
    
  
  }
  ngOnInit() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '809232947583-650bfuk6fcjqe4277l6ic9d3sg8t12rh.apps.googleusercontent.com'
      });
    });
  }
  
  signInWithGoogle() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser: { getAuthResponse: () => { (): any; new(): any; id_token: any; }; }) => {
      const idToken = googleUser.getAuthResponse().id_token;
      // Call your backend API to authenticate the user using the ID token
    });
  }

  submitForm(loginForm: any) {
    if (loginForm.username === 'HR' && loginForm.password === 'HR') {
        this.service.setLoginStatus();
        this.toastr.success("Welcome to HR Home Page...!");
        this.router.navigate(['details']);
        
    } else if (this.UsersList.some((user: { emailId: any; password: any; }) => user.emailId === loginForm.username && user.password === loginForm.password)) {
        const matchingUser = this.UsersList.find((user: { emailId: any; password: any; }) => user.emailId === loginForm.username && user.password === loginForm.password);
        localStorage.setItem("UsersList", JSON.stringify(matchingUser));
        this.service.setLoginStatus();
        this.toastr.success("Hello Welcome to Event Management!");
        this.router.navigate(['loginevent']);
    } else {
        this.toastr.error("invalid user..");
    }
}

  
}



