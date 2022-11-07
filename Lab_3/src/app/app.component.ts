import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<label>Введіть першу цифру:</label>
                 <input [(ngModel)]="number1" placeholder="name" type="number">
                 <label>Введіть другу цифру:</label>
                 <input [(ngModel)]="number2" placeholder="name"type="number">
                 <h1>+ {{number1 + number2}}</h1>
                 <h1>* {{number1 * number2}}</h1>
                 <h1>- {{number1 - number2}}</h1>
`
})
export class AppComponent { 
    name= '';
}
