import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <h1>merhaba</h1>
  <h2>{{this.name}}</h2>
  <h3 [innerText]="name"></h3>
  <input type="text" [value]="name"/>
  --------------------------------
  <button (click)="metot()" >Tıkla</button>
  <input id="name" type="text" (keyup)="getValue()">
  --------------------------------
  <h1>Değer Yakalama</h1>
  <input type="text" (keyup)="valueCatch($event)">
<-------------------------------->
  <h1>Değer Yakalama2</h1>
  <input type="text" #viewChildName>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild("viewChildName") testName:HTMLInputElement;
  title = 'my-app';
  // name:string | number | undefined | null | boolean | Date | object="Osman Karamızrak";
  name:string="Osman karamızrak";
  // undefind veya ilk değer vermek istemiyorsan tsconfig dosyasına "strictNullChecks": false, ifadesini eklemek zorundasın, eklemezsen kodlama sırasında ilk değer vermediğin değişkenlerde syntax hatası alırsın.
  age:number|undefined;
  constructor(){
    console.log(this.age)
  }

  metot(){
    alert("Çalıştır");
  }

  getValue(){
    let element:any=document.getElementById("name");
    console.log(element.value);
  }
  valueCatch(event:any){
console.log(event.target.value);
  }
  valueCatch2(event:any){
    console.log(event.target.value);
  }

}
