import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrl: './article-meta.component.scss',
})
export class ArticleMetaComponent {
  @Input() article?: Article;
}
