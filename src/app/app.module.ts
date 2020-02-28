import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations1/animations/animations.component';
import { AnimationsComponent2 } from './animations2/animations/animations.component';
import { AnimationsComponent3 } from './animations3/animations/animations.component';
import { AnimationsComponent4 } from './animations4/animations/animations.component';
import { HomeComponent } from './home/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animations1', component: AnimationsComponent },
  { path: 'animations2', component: AnimationsComponent2 },
  { path: 'animations3', component: AnimationsComponent3 },
  { path: 'animations4', component: AnimationsComponent4 },
];

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    AnimationsComponent2,
    AnimationsComponent3,
    AnimationsComponent4,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
