import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  User:any;
  Event:any;
  constructor(private service : EventService, private router : Router){} 

  ngOnInit(): void {
    let UserData = JSON.parse(localStorage.getItem('UsersList') || '{}' );
    this.User = UserData;
    console.log(UserData);

    let EventData = JSON.parse(localStorage.getItem('Event') || '{}' );
    this.Event = EventData;
    console.log(EventData);
  }
}