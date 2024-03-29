import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { MfeLibraryV1Module } from 'mfe-library-v1';
import { AppComponent } from './app.component';
import { ComponentShareModule } from './components/component-share.module';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    MfeLibraryV1Module,
    ComponentShareModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { matcher: startsWith('mfe1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' } },
      { matcher: startsWith('mfe2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element' } },
      // { matcher: startsWith('monolithic'), component: WrapperComponent, data: { importName: 'monolithic', elementName: 'monolithic-element' } },
      {
        path: 'poll',
        loadChildren: () => import('./poll/poll.module').then(m => m.PollModule),
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
