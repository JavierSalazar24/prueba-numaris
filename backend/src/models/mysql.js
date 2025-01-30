import mysql from 'mysql2/promise'

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
}

const connection = await mysql.createConnection(config)

export class UnitsModel {
  static async getUnits(search = '') {
    let query =
      'SELECT idgps, nombre_unidad, placas, marca, modelo, anio, color, imgs FROM units'

    let values = []

    if (search !== '') {
      query += ` WHERE
        nombre_unidad LIKE ? OR
        placas LIKE ? OR
        marca LIKE ? OR
        modelo LIKE ? OR
        anio LIKE ? OR
        color LIKE ?`

      values.push(...Array(6).fill(`%${search}%`))
    }

    const [units] = await connection.query(query, values)
    return units
  }

  static async getEvents({ id, dtini, dtfin }) {
    const query =
      'SELECT idgps_units, lat, lon, desc_msg, odometro_kms, ignicion, dt_msg, dtmsg FROM events WHERE idgps_units = ? AND dt_msg BETWEEN ? AND ? ORDER BY dt_msg DESC;'

    const [events] = await connection.query(query, [id, dtini, dtfin])
    return events
  }
}
