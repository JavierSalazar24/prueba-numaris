import { useEventStore } from '../store/useEventStore'
import { formatDate } from '../utils/formatDate'
import { Event } from './Event'

export const EventsHistory = () => {
  const events = useEventStore((state) => state.events)

  return (
    <div className='border border-gray-700 rounded-lg p-4 max-h-[400px] overflow-y-auto bg-gray-800 shadow-md'>
      <h2 className='text-xl font-semibold mb-4 text-gray-200'>
        Historial de eventos
      </h2>
      {events.map((event) => (
        <div
          key={event.dtmsg}
          className='mb-4 p-2 border border-gray-700 rounded-lg bg-gray-700'
        >
          <div className='text-center'>
            <p>
              LAT: {event.lat} - LON: {event.lon}
            </p>
          </div>

          <Event name='Estado' value={event.desc_msg} />
          <Event name='Odómetro' value={`${event.odometro_kms} km.`} />
          <Event
            name='Ignición'
            value={event.ignicion}
            ignicion={true}
            off={event.ignicion !== 'Motor Apagado'}
          />
          <Event name='Última Actualización' value={formatDate(event.dt_msg)} />
        </div>
      ))}
    </div>
  )
}
