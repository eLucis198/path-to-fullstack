import { Request, Response } from 'express'
import knex from '../database/connection'
class ChampionsController {
  public async index (req: Request, res: Response): Promise<Response> {
    const champions = await knex('champion').select('*')
    return res.json(champions)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const champions = await knex('champion').select('*').where('id', id)
    return res.json(champions)
  }
}

export default ChampionsController
