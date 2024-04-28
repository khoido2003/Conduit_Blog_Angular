import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { ArticlePreviewComponent } from './components/articles/article-preview/article-preview.component';
import { ArticleMetaComponent } from './components/articles/article-meta/article-meta.component';
import { FavouriteButtonComponent } from './components/articles/favourite-button/favourite-button.component';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { apiInterceptor } from './interceptors/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    ArticleMetaComponent,
    FavouriteButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([apiInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
