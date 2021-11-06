import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {
  @Input('title') title = '';
  @Input('published') published = '';
  @Input('author') author = '';
  @Input('tags') tags: string[] = [];
  @Input('image') image = '';

  constructor() {}

  ngOnInit(): void {}
}
