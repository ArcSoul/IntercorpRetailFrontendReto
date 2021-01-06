import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AtomLogoComponent } from './components/atoms/atom-logo.component';
import { AtomNavbarComponent } from './components/atoms/atom-navbar.component';
import { OrganismHeaderComponent } from './components/organisms/organism-header.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AtomLogoComponent,
    AtomNavbarComponent,
    OrganismHeaderComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
