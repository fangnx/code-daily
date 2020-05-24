import {
  Controller,
  Param,
  InternalServerErrorException,
  Get,
  Query,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { OrderBy, QuestionsSortBy } from '../shared/stackExchangeModels';
import { BaseQuery } from 'src/app.controller';

export class QuestionsQuery extends BaseQuery {
  order: OrderBy = OrderBy.Desc;
  sort: QuestionsSortBy = QuestionsSortBy.Activity;
  tags?: string;
}

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('')
  async getQuestionsByTags(@Query() questionsQuery: QuestionsQuery) {
    try {
      return this.questionsService.getQuestionsByTags(questionsQuery);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/:ids')
  async getQuestionsByIds(
    @Param('ids') ids: string,
    @Query() questionsQuery: QuestionsQuery,
  ) {
    try {
      return this.questionsService.getQuestionsByIds(ids, questionsQuery);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/:ids/answers')
  async getAnswersByQuestionIds(@Param('ids') ids: string) {
    try {
      return this.questionsService.getAnswersByQuestionIds(ids);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
