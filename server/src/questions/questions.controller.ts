import {
  Controller,
  Get,
  Param,
  InternalServerErrorException,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get('/:ids')
  async getQuestions(@Param('ids') ids: string) {
    try {
      return this.questionsService.getQuestionsByIds(ids);
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
