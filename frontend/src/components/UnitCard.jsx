import { Link } from 'react-router-dom'
import { IoIosPricetag, IoLogoModelS, IoIosColorPalette } from 'react-icons/io'
import { HiOutlineCalendarDateRange } from 'react-icons/hi2'
import { UnitCardDetails } from './UnitCardDetails'

export const UnitCard = ({ unit }) => {
  return (
    <article className='card'>
      <Link to={`/events/${unit.idgps}?unit=${unit.nombre_unidad}`}>
        <div className='card-header'>
          <h2 className='text-xl font-bold text-center'>
            {unit.nombre_unidad}
          </h2>
        </div>

        <div className='border-b-2 pb-3 mt-3 border-gray-700'>
          <img
            src={`./img/${unit.imgs}`}
            alt={unit.nombre_unidad}
            className='w-[200px] object-cover rounded mx-auto'
          />
        </div>

        <div className='card-content'>
          <UnitCardDetails
            name='Placas'
            value={unit.placas}
            Icon={IoIosPricetag}
          />
          <UnitCardDetails
            name='Modelo'
            value={`${unit.marca} - ${unit.modelo}`}
            Icon={IoLogoModelS}
          />
          <UnitCardDetails
            name='Año'
            value={unit.anio}
            Icon={HiOutlineCalendarDateRange}
          />
          <UnitCardDetails
            name='Color'
            value={unit.color}
            Icon={IoIosColorPalette}
          />
        </div>
      </Link>
    </article>
  )
}
