import { createReducer, on } from "@ngrx/store";
import { incriment,decriment ,reset} from "./counter.actions";
import {initialstate} from "../store/counter.state"

const _counterreducer=createReducer(initialstate,
    on(incriment,(state)=>{
    return {
        ...state,
        counter:state.counter+1
    }
  
}),

on(decriment,(state)=>{
    return{
        ...state,
        counter:state.counter-1
    }

}),
on(reset,(state)=>{
    return{
        ...state,
        counter:0 
    }

})










)

export function counterreducer(state:any,action:any){
    return _counterreducer(state,action)
}