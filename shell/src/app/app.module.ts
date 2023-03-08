import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { matcher: startsWith('mfe1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' } },
      { matcher: startsWith('mfe2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element' } },
      // { matcher: startsWith('monolithic'), component: WrapperComponent, data: { importName: 'monolithic', elementName: 'monolithic-element' } },
      { matcher: startsWith('mfe3'), component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element' } },
      {
        path: 'monolithic',
        loadChildren: () => import('monolithic/web-components').then(m => m.AppModule),
      }
    ])
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
