import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-loginevent',
  templateUrl: './loginevent.component.html',
  styleUrls: ['./loginevent.component.css']
})
export class LogineventComponent implements OnInit{
  router: any;

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
   
    alert('Booking details saved succesfully!..');
    this.router.navigate(['payment']);
    
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
 
@ViewChild('content', { static: false }) el!: ElementRef;
 
title = 'angularpdfgenerator';
makePdf() {
  let pdf = new jsPDF()
  pdf.html(this.el.nativeElement, {
    callback: (pdf) => {
      let PDF = new jsPDF('p', 'mm', 'a4');
        
          PDF.save('Ticket.pdf');
    }
    })
}
// public openPDF(): void {
//   let DATA: any = document.getElementById('htmlData');
//   html2canvas(DATA).then((canvas) => {
//     let fileWidth = 228;
//     let fileHeight = (canvas.height * fileWidth) / canvas.width;
//     const FILEURI = canvas.toDataURL('image/png');
//     let PDF = new jsPDF('p', 'mm', 'a4');
//     let position = 50;
//     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
//     PDF.save('Ticket.pdf');
//   });
// }

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





