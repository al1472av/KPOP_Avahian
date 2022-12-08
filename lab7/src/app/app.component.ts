import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms';

export class Org{
  constructor(
      public org_name: string,
      public city: string,
      public address: string,
      public contact_person:string,
      public phone:number,
      public email:string,
      public obj_name:string,
      public usage:string){}
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usage = ["Опалення","Використання","ГВС" ];
  isFormValid(): boolean {
    return this.orgForm.valid;
  }
  org: Org = new Org("", "", "","",0,"","","");
  constructor(private fb: FormBuilder) {}


   orgForm= this.fb.group({
    org_name: [this.org.org_name,[Validators.required,Validators.maxLength(15)]],
    city: [this.org.city,[Validators.required]],
    address: [this.org.address,[Validators.required]],
    contact_person:[this.org.contact_person,[Validators.required]],
    phone:[this.org.phone,[Validators.required,Validators.pattern('[0-9]{10}')]],
    email:[this.org.email,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    obj_name:[this.org.obj_name,[Validators.required]],
    usage:[this.org.usage,[Validators.required]]
  });

  title = 'lab7';

  addOrg():void{
      if(!this.isFormValid()){
        window.alert('Please fill all fields before submitting the form');
        return;
      }
      const body = this.orgForm.getRawValue();
      const msg = `Інформація про організацію:
        Назва організації: ${body.org_name}
        Місто:${body.city}
        Адреса:${body.address}
        Контактна особа:${body.contact_person}
        телефон:${body.phone}
        Пошта:${body.email}
        Назва об'єкту:${body.obj_name}
        Використання:${body.usage}
      
      `;
      window.confirm(msg);
      console.log(this.org);
  }

}
