import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  enviar() {
    const user = this.formGroup.value;
    //console.log(user);
    window.alert('Te contactaremos en la brevedad!');
    this.router.navigate(['/info-repos']);
  }

  private buildForm(){

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

}
