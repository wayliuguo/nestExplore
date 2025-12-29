import {
  Controller,
  Get
} from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('initData')
  async initData() {
    await this.articleService.initData();
    return 'done';
  }
}
