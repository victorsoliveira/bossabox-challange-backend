import { Request, Response } from 'express'
import Tools from '../schemas/Tools'

class ToolController {
  public async list (req: Request, res: Response): Promise<Response> {
    const tools = await Tools.find()
    return res.json(tools)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const tool = await Tools.create(req.body)
    return res.json(tool)
  }
}

export default new ToolController()
