import { Component, OnInit } from '@angular/core';
import { Whatsapp } from './btnWhatsaap/btnWhatsaap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vipal-front';

  constructor(
    private whatsapp: Whatsapp,
    
  ) { }

  ngOnInit(): void{
    this.whatsapp.btnWhatsapp();
  }
}

