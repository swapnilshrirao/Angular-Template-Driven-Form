import { Component } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  msg:string="";
   
  submit(form:any){    
    console.log(form.firstName);
    console.log(form.lastName);
    console.log(form.comment);
    this.msg="Contact Form Submitted For "+form.firstName;
}
}
