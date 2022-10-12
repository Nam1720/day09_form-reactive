import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  gte(control: AbstractControl): ValidationErrors | null {
    const v =+ control.value;
    if (isNaN(v)) {
      return { gte: true, requiredValue: 10 };
    }
    if (v <= 10) {
      return { gte: true, required: 10 };
    }
    return null;
  }

  get lastname () {
    return this.contactForm.get('lastname')
  }
  constructor() { }

  ngOnInit(): void {
  }

  countryList = [
    {id: 1, value: 'Việt Nam'},
    {id: 2, value: 'Lào'}
  ]

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(10)]),
    lastname: new FormControl('',[this.gte]),
    email: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    isMarried: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
  })

  get firstname(){
    return this.contactForm.get('firstname');
  }

  onSubmit() {
    console.log('object', this.contactForm.value)
  }


}
