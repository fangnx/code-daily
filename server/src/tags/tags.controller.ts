import {
  Controller,
  InternalServerErrorException,
  Query,
  Get,
  Param,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { OrderBy, TagsSortBy, BaseQuery } from 'src/shared/stackExchangeModels';

export class TagsQuery extends BaseQuery {
  order: OrderBy = OrderBy.Desc;
  sort: TagsSortBy = TagsSortBy.Popular;
}

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get('')
  async getTags(@Query() tagsQuery: TagsQuery) {
    try {
      return this.tagsService.getTags(tagsQuery);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/:tags/related')
  async getRelatedTags(
    @Param('tags') tags: string[],
    @Query() tagsQuery: TagsQuery,
  ) {
    try {
      return this.tagsService.getRelatedTags(tags, tagsQuery);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
