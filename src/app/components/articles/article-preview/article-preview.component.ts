import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.scss',
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount += 1;
    } else {
      this.article.favoritesCount -= 1;
    }
  }
}
