import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { decriment, incriment,reset } from '../../shared/store/counter.actions';

@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrl: './buttoncomponent.component.css'
})
export class ButtoncomponentComponent {

constructor(private store:Store<{counter:{counter:number}}>){}

onincriment(){
  this.store.dispatch(incriment())

}

ondecrement(){

this.store.dispatch(decriment())
}



onreset(){
  this.store.dispatch(reset())

}





}
