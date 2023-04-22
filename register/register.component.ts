import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private service: EventService,private toastr: ToastrService) {}
  ngOnInit(): void {};

  register(regForm: any) {
    console.log(regForm);
  }
  
  registerUser(user: any) {
    console.log(user);
    this.service.registerUser(user).subscribe(() => {}); 
    this.toastr.success("Register sucessfull."); 
    
  }
  OnlyNumbersAllowed(event: { which: any; keyCode: any; } ):boolean {
    const charCode = (event.which)?event.which: event.keyCode;
    
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }
  onlyAlphabetsAllowed(event: KeyboardEvent): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
  
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      return true;
    }
  
    return false;
  }
  
}
