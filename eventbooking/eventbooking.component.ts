import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventbooking',
  templateUrl: './eventbooking.component.html',
  styleUrls: ['./eventbooking.component.css']
})
export class EventbookingComponent implements OnInit{
  

  constructor(private service: EventService) {}
  ngOnInit(): void {
    this.futureDateDisable();
  };

  eventbooking(bookForm: any) {
    console.log(bookForm);
  }
  
  registerEvent(event: any) {
    console.log(event);
    this.service.registerEvent(event).subscribe(() => {});
    alert('Booking details saved succesfully!');
    
  }
  // onlyFutureDatesAllowed(event: Event): boolean {
  //   const inputDate = new Date((event.target as HTMLInputElement).value);
  //   const currentDate = new Date();
  
  //   if (inputDate >= currentDate) {
  //     return true;
  //   }
  
  //   return false;
  // }
// maxDate:any;
// futureDateDisable(){
// var date:any = new Date();
// var todayDate:any = date.getData();
// var month:any = date.getMonth() + 1;
// var year:any = date.getFullYear();
// if(todayDate < 10){
//   todayDate = '0' + todayDate;
// }
// if(month < 10){
//   month = '0' + month;
// }
// this.maxDate = year + "-" + month + "-" + todayDate;
// console.log(this.maxDate);
// }
  minDate: any;

futureDateDisable() {
  const date = new Date();
  const todayDate = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() ;
  const formattedTodayDate = todayDate < 10 ? '0' + todayDate : todayDate;
  const formattedMonth = month < 10 ? '0' + month : month;
  this.minDate = `${year}-${formattedMonth}-${formattedTodayDate}`;
  console.log(this.minDate);
}
}
