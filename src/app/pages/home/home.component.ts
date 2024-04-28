import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ArticleListConfig } from '../../models/article-list-config.model';
import { TagsService } from '../../services/tags.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {},
  };

  tagLoaded = false;
  destroyRef = inject(DestroyRef);
  tagsList: string[] = [];

  constructor(
    private readonly tagsService: TagsService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.tagsService
      .getAll()
      .pipe(tap(() => (this.tagLoaded = true)))
      .subscribe((data) => {
        this.tagsList = data;
      });
  }

  setListTo(type: string = '', filters: Object = {}): void {
    this.listConfig = { type: type, filters: filters };
    console.log('working');
    console.log(this.listConfig);
  }
}
