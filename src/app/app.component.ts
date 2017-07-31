import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;

  constructor(private store: Store<any>, private router: Router) {
    this.store.select(state => state._loading.loading).subscribe(loading => {
      console.log(loading);
      this.loading = loading;
    });
  }
}
