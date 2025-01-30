import { API_HOST, TOKEN } from '../config'

export const getUnits = async () => {
  try {
    const res = await fetch(`${API_HOST}/units`, {
      headers: { 'Tcv-Client-Id': TOKEN }
    })

    if (!res.ok) {
      const errorMsg = `Error ${res.status}: ${res.statusText}`
      throw new Error(errorMsg)
    }

    return await res.json()
  } catch (error) {
    console.log(error.message)
    throw new Error('Ah ocurrido un error, intentalo más tarde')
  }
}

export const getEvents = async (unit, { init, end }) => {
  try {
    const res = await fetch(
      `${API_HOST}/events?dtini=${init}&dtfin=${end}&idgps=${unit}`,
      { headers: { 'Tcv-Client-Id': TOKEN } }
    )

    if (!res.ok) {
      const errorMsg = `Error ${res.status}: ${res.statusText}`
      console.error(errorMsg)
      throw new Error(errorMsg)
    }

    return await res.json()
  } catch (error) {
    console.log(error.message)
    throw new Error('Ah ocurrido un error, intentalo más tarde')
  }
}
