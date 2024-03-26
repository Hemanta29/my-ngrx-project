import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hide, show } from './ngrx-state/actions/home.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-ngrx-project';
  // isShowMore: boolean = false;

  show$: Observable<boolean> = new Observable();

  constructor(private store: Store<{ home: false }>) {
    this.show$ = this.store.select('home');
  }

  showMore() {
    // this.isShowMore = !this.isShowMore;
    this.store.dispatch(show());
  }

  showLess() {
    // this.isShowMore = !this.isShowMore;
    this.store.dispatch(hide());
  }
}
