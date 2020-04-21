import { Repository, EntityRepository, In, Like } from "typeorm";
import { Tool } from "../entities/Tool";
import { Service } from "typedi";

@Service()
@EntityRepository(Tool)
export class ToolRepository extends Repository<Tool> {

  public async findAll(tag: string): Promise<Tool[]> {

    const args = {
      where: [
        {
          'tag': In([Like(`%${tag}%`)]),
        }
      ],
      relations: ['tags']
    };

    if (tag) {
      return await this.find(args);
    }

    return await this.find();
  }

}
