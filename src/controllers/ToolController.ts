import { ToolRepository } from '../repositories/ToolRepository';
import { JsonController, Get, Post, Delete, QueryParam, Body, Param, HttpCode } from 'routing-controllers';
import { InjectRepository } from "typeorm-typedi-extensions";

import { Tool } from '../entities/Tool';

@JsonController()
export class ToolController {

  constructor(@InjectRepository() private readonly repository: ToolRepository) { }

  @Get('/tools')
  public async get(@QueryParam('tag') tag: string): Promise<Tool[]> {
    return await this.repository.findAll(tag);
  }

  @HttpCode(201)
  @Post('/tools')
  public async create(@Body() tool: Tool): Promise<Tool> {
    return await this.repository.save(tool);
  }

  @HttpCode(204)
  @Delete('/tools')
  public async delete(@Param("id") id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
