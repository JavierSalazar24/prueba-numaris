const FormEvents = ({ submit, loading }) => {
  return (
    <form
      className='space-y-4 mb-6 bg-gray-800 p-6 rounded-lg shadow-md'
      onSubmit={submit}
    >
      <div>
        <label
          htmlFor='init'
          className='block text-sm font-medium text-gray-300'
        >
          Fecha Inicio
        </label>
        <input
          id='init'
          type='datetime-local'
          required
          className='mt-1 block w-full rounded-sm shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-700 border-gray-600 text-white py-1 px-2'
          name='init'
        />
      </div>
      <div>
        <label
          htmlFor='end'
          className='block text-sm font-medium text-gray-300'
        >
          Fecha Fin
        </label>
        <input
          id='end'
          type='datetime-local'
          required
          className='mt-1 block w-full rounded-sm shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-gray-700 border-gray-600 text-white py-1 px-2'
          name='end'
        />
      </div>
      <button
        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform cursor-pointer disabled:bg-blue-200 disabled:cursor-not-allowed disabled:text-gray-400'
        disabled={loading}
      >
        {loading ? 'Generando reporte...' : 'Generar Reporte'}
      </button>
    </form>
  )
}
export default FormEvents
