import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ExampleComponent } from './example/example.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    CoreModule,
    SharedModule,
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
