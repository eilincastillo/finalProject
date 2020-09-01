import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  @Input() contacto = {name: '', email: ''};

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.contacto);
    window.alert('Te contactaremos en la brevedad!');
    this.router.navigate(['/info-repos']);
  }

}
