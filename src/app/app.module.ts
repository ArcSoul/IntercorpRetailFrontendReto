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
import { AtomTitleTextComponent } from './components/atoms/atom-title-text.component';
import { AtomTableSeeRowComponent } from './components/atoms/atom-table-see-row.component';
import { AtomInputSelectComponent } from './components/atoms/atom-input-select.component';
import { FormsModule } from '@angular/forms';
import { AtomTableHeaderComponent } from './components/atoms/atom-table-header.component';
import { AtomTableRowComponent } from './components/atoms/atom-table-row.component';
import { MoleculeTableToolsComponent } from './components/molecules/molecule-table-tools.component';
import { AtomInputTextComponent } from './components/atoms/atom-input-text.component';
import { AtomButtonRouterComponent } from './components/atoms/atom-button-router.component';
import { AtomButtonIconComponent } from './components/atoms/atom-button-icon.component';
import { AtomButtonClickComponent } from './components/atoms/atom-button-click.component';
import { AtomBoxGradientComponent } from './components/atoms/atom-box-gradient.component';
import { OrganismTablePrimaryComponent } from './components/organisms/organism-table-primary.component';
import { PageCreateClientComponent } from './components/pages/page-create-client/page-create-client.component';
import { OrganismFormComponent } from './components/organisms/organism-form.component';
import { AtomInputNumberComponent } from './components/atoms/atom-input-number.component';
import { AtomInputDateComponent } from './components/atoms/atom-input-date.component';
import { PageListClientComponent } from './components/pages/page-list-client/page-list-client.component';
import { PageAnalystClientComponent } from './components/pages/page-analyst-client/page-analyst-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AtomLogoComponent,
    AtomNavbarComponent,
    AtomTitleTextComponent,
    AtomBoxGradientComponent,
    AtomInputSelectComponent,
    AtomInputTextComponent,
    AtomButtonRouterComponent,
    AtomButtonIconComponent,
    AtomButtonClickComponent,
    AtomTableSeeRowComponent,
    AtomTableHeaderComponent,
    AtomTableRowComponent,
    MoleculeTableToolsComponent,
    OrganismHeaderComponent,
    OrganismTablePrimaryComponent,
    PageHomeComponent,
    PageCreateClientComponent,
    OrganismFormComponent,
    AtomInputNumberComponent,
    AtomInputDateComponent,
    PageListClientComponent,
    PageAnalystClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
