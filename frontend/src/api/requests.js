import { API_HOST } from '../config'

export const getUnits = async (search = '') => {
  try {
    const url = search
      ? `${API_HOST}/units?search=${search}`
      : `${API_HOST}/units`

    const res = await fetch(url)

    if (!res.ok) {
      const errorMsg = `Error ${res.status}: ${res.statusText}`
      throw new Error(errorMsg)
    }

    const data = await res.json()

    return data.units
  } catch (error) {
    console.log(error.message)
    throw new Error('Ah ocurrido un error, intentalo más tarde')
  }
}

export const getEvents = async (id, { init, end }) => {
  try {
    const res = await fetch(
      `${API_HOST}/events/${id}?dtini=${init}&dtfin=${end}`
    )

    if (!res.ok) {
      const errorMsg = `Error ${res.status}: ${res.statusText}`
      console.error(errorMsg)
      throw new Error(errorMsg)
    }

    const data = await res.json()

    return data.events
  } catch (error) {
    console.log(error.message)
    throw new Error('Ah ocurrido un error, intentalo más tarde')
  }
}
