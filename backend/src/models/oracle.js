import 'dotenv/config'
import oracledb from 'oracledb'
import { format } from 'date-fns'

const config = {
  user: process.env.DB_USER_ORACLE,
  password: process.env.DB_PASS_ORACLE,
  connectString: `${process.env.DB_HOST_ORACLE}:${process.env.DB_PORT_ORACLE}/${process.env.DB_DATABASE_ORACLE}`
}

let connection

async function initOracleConnection() {
  if (!connection) {
    connection = await oracledb.getConnection(config)
    console.log('Conexión a Oracle establecida')
  }
}

await initOracleConnection()

export class UnitsModel {
  static async getUnits(search = '') {
    let query = `SELECT idgps, nombre_unidad, placas, marca, modelo, anio, color, imgs FROM units`
    let binds = {}

    if (search !== '') {
      query += ` WHERE nombre_unidad LIKE :search OR 
                        placas LIKE :search OR 
                        marca LIKE :search OR 
                        modelo LIKE :search OR 
                        anio LIKE :search OR 
                        color LIKE :search`
      binds = { search: `%${search}%` }
    }

    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    })

    return result.rows.map((row) =>
      Object.fromEntries(
        Object.entries(row).map(([key, value]) => [key.toLowerCase(), value])
      )
    )
  }

  static async getEvents({ id, dtini, dtfin }) {
    const formattedDtini = format(dtini, 'yyyy-MM-dd HH:mm:ss')
    const formattedDtfin = format(dtfin, 'yyyy-MM-dd HH:mm:ss')

    const query = `SELECT idgps_units, lat, lon, desc_msg, odometro_kms, ignicion, dt_msg, dtmsg 
                   FROM events 
                   WHERE idgps_units = :id 
                   AND dt_msg BETWEEN TO_DATE(:dtini, 'YYYY-MM-DD HH24:MI:SS') 
                   AND TO_DATE(:dtfin, 'YYYY-MM-DD HH24:MI:SS') 
                   ORDER BY dt_msg DESC`

    const binds = { id, dtini: formattedDtini, dtfin: formattedDtfin }
    const result = await connection.execute(query, binds, {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    })
    return result.rows.map((row) =>
      Object.fromEntries(
        Object.entries(row).map(([key, value]) => [key.toLowerCase(), value])
      )
    )
  }
}
