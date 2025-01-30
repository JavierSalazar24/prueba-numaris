import { create } from 'zustand'

export const useEventStore = create((set) => ({
  events: [],
  points: [],
  setEvents: (evts) =>
    set({
      events: evts,
      points: evts.map((event) => ({
        lat: event.lat,
        lng: event.lon,
        marker: event.ignicion === 'Motor Encendido'
      }))
    })
}))
