

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('monolithic-element', ce);
  }

}

