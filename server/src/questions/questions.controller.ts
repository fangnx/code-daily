import {
  Controller,
  Param,
  InternalServerErrorException,
  Body,
  Post,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { OrderBy, SortBy } from '../shared/stackExchangeModels';

export class QuestionsQuery {
  order: OrderBy;
  sort: SortBy;
  tags?: string[];
}

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('/:ids')
  async getQuestionsByIds(
    @Body() questionsQuery: QuestionsQuery,
    @Param('ids') ids: string,
  ) {
    console.log(questionsQuery);

    try {
      return this.questionsService.getQuestionsByIds(
        ids,
        questionsQuery.order,
        questionsQuery.sort,
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Post('')
  async getQuestionsByTags(@Body() questionsQuery: QuestionsQuery) {
    console.log(questionsQuery);

    try {
      return this.questionsService.getQuestionsByTags(
        questionsQuery.tags,
        questionsQuery.order,
        questionsQuery.sort,
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  // @Get('/:ids/answers')
  // async getAnswersByQuestionIds(@Param('ids') ids: string) {
  //   try {
  //     return this.questionsService.getAnswersByQuestionIds(ids);
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }
}
