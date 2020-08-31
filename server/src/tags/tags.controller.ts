import {
  Controller,
  InternalServerErrorException,
  Query,
  Get,
  Param,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import {
  BaseQuery,
  OrderBy,
  TagsSortBy,
  Tag,
} from '../shared/stackExchangeModels';

export class TagsQuery extends BaseQuery {
  order: OrderBy = OrderBy.Desc;
  sort: TagsSortBy = TagsSortBy.Popular;
}

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  public getDefaultTagNames(): string[] {
    return this.tagsService.getDefaultTagNames();
  }

  @Get('popular')
  public async getPopularTags(@Query() tagsQuery: TagsQuery): Promise<Tag[]> {
    try {
      return this.tagsService.getPopularTags(tagsQuery);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/:tags/related')
  public async getRelatedTags(
    @Param('tags') tags: string[],
    @Query() tagsQuery: TagsQuery,
  ): Promise<Tag[]> {
    try {
      return this.tagsService.getRelatedTags(tags, tagsQuery);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
