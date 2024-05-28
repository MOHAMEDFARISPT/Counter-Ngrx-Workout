import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-displaycomponent',
  templateUrl: './displaycomponent.component.html',
  styleUrl: './displaycomponent.component.css'
})
export class DisplaycomponentComponent implements OnInit {

  constructor(private store:Store<{counter:{counter:number}}>){}
counterDisplay!:number ;
  ngOnInit(): void {
    this.store.select('counter').subscribe({
      next:(res)=>{
        this.counterDisplay=res.counter

      }
    })
    
  }
}
