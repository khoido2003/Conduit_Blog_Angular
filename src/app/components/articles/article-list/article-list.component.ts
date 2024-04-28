import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { ArticleListConfig } from '../../../models/article-list-config.model';
import { Article } from '../../../models/article.model';
import { LoadingState } from '../../../models/loading-state.model';
import { ArticlesService } from '../../../services/articles.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {
  query!: ArticleListConfig;
  results: Article[] = [];
  currentPage = 1;
  totalPages: Array<number> = [];
  loading = LoadingState.NOT_LOADED;
  destroyRef = inject(DestroyRef);

  LoadingState = LoadingState;

  @Input() limit!: number;
  @Input() set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
    }
  }

  ngOnInit(): void {
    this.runQuery();
  }

  constructor(private articleService: ArticlesService) {}

  setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = LoadingState.LOADING;
    this.results = [];

    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = this.limit * (this.currentPage - 1);
    }

    this.articleService
      .query(this.query)
      .pipe()
      .subscribe((data) => {
        this.loading = LoadingState.LOADED;
        this.results = data.articles;

        // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        // this.totalPages = Array.from(
        //   new Array(Math.ceil(data.articleCount / this.limit)),
        //   (val, index) => index + 1
        // );
      });
  }
}
