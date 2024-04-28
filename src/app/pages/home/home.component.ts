import { Component, OnInit } from '@angular/core';
import { ArticleListConfig } from '../../models/article-list-config.model';

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

  ngOnInit(): void {}
}
