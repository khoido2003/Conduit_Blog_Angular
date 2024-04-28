import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { ArticleListConfig } from '../models/article-list-config.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private readonly http: HttpClient) {}

  query(
    config: ArticleListConfig
  ): Observable<{ articles: Article[]; articleCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    let params = new HttpParams();

    Object.keys(config.filters).forEach((key) => {
      // @ts-ignore
      params = params.set(key, config.filters[key]);
    });

    return this.http.get<{ articles: Article[]; articleCount: number }>(
      '/articles' + (config.type === 'feed' ? '/feed' : ''),
      { params }
    );
  }
}
