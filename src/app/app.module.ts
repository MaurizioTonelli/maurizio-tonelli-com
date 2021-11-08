import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './home-page/hero/hero.component';
import { LastArticlesComponent } from './home-page/last-articles/last-articles.component';
import { ArticleCardComponent } from './shared/article-card/article-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticlesComponent } from './articles-page/articles/articles.component';
import { PaginationControlsComponent } from './shared/pagination-controls/pagination-controls.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { CommentsComponent } from './article-page/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    LastArticlesComponent,
    ArticleCardComponent,
    FooterComponent,
    HomePageComponent,
    ArticlesPageComponent,
    ArticlesComponent,
    PaginationControlsComponent,
    ArticlePageComponent,
    CommentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
