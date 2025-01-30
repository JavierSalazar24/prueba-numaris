import { UnitsModel } from '../models/oracle.js'

export const getUnits = async (req, res) => {
  try {
    const { search } = req.query

    const units = search
      ? await UnitsModel.getUnits(search)
      : await UnitsModel.getUnits()

    return res.status(201).json({ units })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getEvents = async (req, res) => {
  try {
    const { id } = req.params
    const { dtini, dtfin } = req.query

    const events = await UnitsModel.getEvents({ id, dtini, dtfin })

    return res.status(201).json({ events })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
