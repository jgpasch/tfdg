import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;

  constructor(private store: Store<any>) {
    this.store.select(state => state._loading.loading).subscribe(loading => {
      // console.log('triggered loading chanfe', state['_loading'].loading);
      console.log(loading);
      this.loading = loading;
    });
  }

}
