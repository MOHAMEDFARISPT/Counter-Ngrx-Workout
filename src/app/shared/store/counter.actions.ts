import { createAction } from "@ngrx/store";

export const  incriment=createAction('increment')
export const decriment=createAction('decriment')
export const reset=createAction("reset")