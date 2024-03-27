import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hide, show } from './ngrx-state/actions/home.actions';
import { HomeService } from './services/home.service';
import * as DogActions from './ngrx-state/actions/dog.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'my-ngrx-project';
  // isShowMore: boolean = false;

  show$: Observable<boolean> = new Observable();
  dog$: Observable<any> = new Observable();

  constructor(
    private store: Store<{ home: false }>,
    private homeService: HomeService,
    private dogStore: Store<{dog:any}>
  ) {
    this.show$ = store.select('home');
    this.dog$ = dogStore.select('dog');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.dog$ = this.homeService.getDog();

    this.dogStore.dispatch(DogActions.loadDog());
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
