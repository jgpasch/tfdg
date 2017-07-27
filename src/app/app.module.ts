import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
