import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

// Material imports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdListModule,
  MdProgressSpinnerModule
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
import { homepageReducer } from './reducers/homepageReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { TeamEffects } from './effects/teamEffects';
import { HomepageEffects } from './effects/homepageEffects';
// others
import config from './../config/settings';
import { AppComponent } from './app.component';
import { FirebaseService } from './shared/services/firebase.service';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdProgressSpinnerModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot({ _teams: teamsReducer, _team_names: teamNamesReducer, _homepage: homepageReducer, _loading: loadingReducer }),
    EffectsModule.forRoot([TeamEffects, HomepageEffects])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
