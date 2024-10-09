import useUpdate from '../../hooks/useUpdate';
import UpdateProperty from './UpdateProperty'

const UpdatePeople = () => {
    const { data } = useUpdate('person');
  return (
    <ul className="w-full grid grid-cols-4 gap-4 auto-rows-[minmax(100px, auto)] px-4 pb-6 mt-6 mb-2 bg-white dark:bg-[#2c2c2e] border border-gray-200 rounded-lg shadow  dark:border-gray-700 p-2">
      <h2 className="text-xl col-span-3 my-4">Updated People :</h2>
      <br />  
      {data?.results.map((change) => (
        <UpdateProperty id={change.id} type='person' key={change.id} />
      ))}
    </ul>
  )
}

export default UpdatePeople