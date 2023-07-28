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

  
  todoDataList =[
    {
      Status:true,
      Thing:'第一件事'
    },{
      Status:false,
      Thing:'第二件事'
    },{
      Status:false,
      Thing:'第三件事'
    },
  ];

  toggleAll(){
   this.toggleAllBtn= !this.toggleAllBtn;
this.todoDataList.forEach(data=>{
  data.Status=this.toggleAllBtn;
});
  }

  clickCheck(item:any){
    item.Status=!item.Status;
  }


}
