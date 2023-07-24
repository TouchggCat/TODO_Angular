import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'One Todo';
  place='預計要做什麼勒???';

  toggleAllBtn=false;
  check1=false;
  check2=false;


  toggleAll(){
   this.toggleAllBtn= !this.toggleAllBtn;

   this.check1=this.toggleAllBtn;
   this.check2=this.toggleAllBtn;
  }

  clickCheck1(){
    this.check1=!this.check1;
  }

  clickCheck2(){
    this.check2=!this.check2;
  }
}
