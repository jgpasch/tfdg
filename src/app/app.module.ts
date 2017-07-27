import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

// Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdListModule
} from '@angular/material';

// firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { teamsReducer } from './reducers/teamsReducer';
import { teamNamesReducer } from './reducers/teamNamesReducer';
import { TeamEffects } from './effects/teamEffects';
// others
import config from './../config/settings';
import { AppComponent } from './app.component';
import { FirebaseService } from './shared/services/firebase.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot({ _teams: teamsReducer, _team_names: teamNamesReducer }),
    EffectsModule.forRoot([TeamEffects])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
