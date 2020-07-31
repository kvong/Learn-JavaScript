import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name:string = 'Khanh';

  constructor(){
    console.log(this.name);
    this.changeName('John');
  }

  changeName(name:string){
    this.name = name;
  }
}
