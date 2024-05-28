import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtoncomponentComponent } from './components/buttoncomponent/buttoncomponent.component';
import { DisplaycomponentComponent } from './components/displaycomponent/displaycomponent.component';
import { StoreModule } from '@ngrx/store';
import { counterreducer } from './shared/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ButtoncomponentComponent,
    DisplaycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter:counterreducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
