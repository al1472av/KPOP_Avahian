import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent ,Org} from './app.component';
import { FormBuilder, FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers:[FormBuilder],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lab7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lab7');
  });


  //HTML Validation//

  it('should show default message Lab 7 in the h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('h1'));
    expect(de.nativeElement.textContent).toEqual("Lab 7");
  });

  it('should show default message Інформація про організацію in the h2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('h2'));
    expect(de.nativeElement.textContent).toEqual("Інформація про організацію");
  });

  it('should have a org_name element ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.org_name'));
    expect(el).toBeTruthy();
  });

  it('should have a label "Назва*" for org_name element ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.org_name label.input-label'));
    expect(el.nativeElement.innerText).toEqual("Назва*");
  });

  it('should have an input element with class input_class for org_name field ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.org_name input.input_class'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('type')).toEqual("text");
    expect(el.nativeElement.getAttribute('id')).toEqual("org_name");
    expect(el.nativeElement.getAttribute('name')).toEqual("org_name");
    expect(el.nativeElement.getAttribute('autoComplete')).toEqual("off");
  });

  // Form Validation//
  it('should mark org_name invalid when it has no value ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('org_name');
    ctrl?.setValue(null);
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });
  it('should mark org_name valid when it has  value ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('org_name');
    ctrl?.setValue('Lidl');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should mark org_name invalid when its value length > 15 ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('org_name');
    ctrl?.setValue('AAAAAAABBBBBBBCCCCCCC');
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });
  
  it('should mark org_name valid when its value length < 15 ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('org_name');
    ctrl?.setValue('AAAAAAA');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  
  it('should mark phone valid when its value of numbers 0-9 and length = 10 ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('phone');
    ctrl?.setValue(9870546321);
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should mark email valid when its value as  required ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('email');
    ctrl?.setValue('karl@gmail.com');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should mark email invalid when its value  not as required ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('email');
    ctrl?.setValue('karl');
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });

//Select Validation//
  it('should have a select element with class selsect_class for usage field', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const el = fixture.debugElement.query(By.css('.usage select.select_class'));
    expect(el).toBeTruthy();
  });

  it('should render correct number of  usage options', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const usage = ["Опалення","Використання","ГВС","Купівля"];
    component.usage = usage;
    fixture.detectChanges();
    const options = fixture.debugElement.queryAll(By.css('.usage .option'));
    expect(options.length).toEqual(usage.length - 1);
  });


  it('should mark usage invalid when it has no value ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('usage');
    ctrl?.setValue(null);
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });
  
  it('should mark mark usage valid when it has value ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const ctrl = component.orgForm.get('usage');
    ctrl?.setValue('Опалення');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

//Submit//
  
it('should call the addOrg method when the orgForm is submitted', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit',null)
  const fnc = spyOn(component,'addOrg');
  component.addOrg();
  fixture.detectChanges();
  expect(fnc).toHaveBeenCalled();
});

//Click on submit button//
it('should submit the form when submit button is clicked', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.debugElement.query(By.css('form')).triggerEventHandler('click',null)
  const fnc = spyOn(component,'addOrg');
  component.addOrg();
  fixture.detectChanges();
  expect(fnc).toHaveBeenCalled();
});

//Form Submit//
it('should return true when isFormValid is called and orgForm is valid', () => {
  const fixture = TestBed.createComponent(AppComponent);
  let someData = {
    org_name: 'LidlInter',
    city: "Berlin",
    address:"Berslin Gaus street 15",
    contact_person:"Karl Shmidt",
    phone:8765432196,
    email:"karl_smidt@gmail.com",
    obj_name: 'TempLidl',
    usage:'Опалення'
  };

  component.orgForm.patchValue(someData);
  fixture.detectChanges();
  expect(component.isFormValid()).toBeTruthy();
});

it('should return false when isFormValid is called and orgForm is invalid', () => {
  const fixture = TestBed.createComponent(AppComponent);
  let someData = {
    org_name: null,
    city: "Berlin",
    address:"Berslin Gaus street 15",
    contact_person:"Karl Shmidt",
    phone:8765432196,
    email:"karl_smidt@gmail.com",
    obj_name: 'TempLidl',
    usage:'Опалення'
  };

  component.orgForm.patchValue(someData);
  fixture.detectChanges();
  expect(component.isFormValid()).toBeFalsy();
});
});

describe('Org', () => {
  it('should create an instance', () => {
    expect(new Org("", "", "","",0,"","","")).toBeTruthy();
  });
  
  it('should accept values', () => {
    let pastebin = {
    org_name: 'LidlInter',
    city: "Berlin",
    address:"Berslin Gaus street 15",
    contact_person:"Karl Shmidt",
    phone:8765432196,
    email:"karl_smidt@gmail.com",
    obj_name: 'TempLidl',
    usage:'Опалення'
  };
    let org = new Org(pastebin.org_name,pastebin.city,pastebin.address,pastebin.contact_person,pastebin.phone,pastebin.email,pastebin.obj_name,pastebin.usage);


    expect(org.org_name).toEqual('LidlInter');
    expect(org.city).toEqual('Berlin');
    expect(org.address).toEqual('Berslin Gaus street 15');
    expect(org.contact_person).toEqual('Karl Shmidt');
    expect(org.phone).toEqual(8765432196);
    expect(org.email).toEqual('karl_smidt@gmail.com');
    expect(org.obj_name).toEqual('TempLidl');
    expect(org.usage).toEqual('Опалення');


  });
});