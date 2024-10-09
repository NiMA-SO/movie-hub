import useUpdate from "../../hooks/useUpdate";
import UpdateProperty from "./UpdateProperty";

const UpdateMovie = () => {
    const { data } = useUpdate('movie');
  return (
    <ul className="w-full grid grid-cols-2 gap-3 auto-rows-[minmax(100px, auto)] mt-4 mb-2">
      <h2 className="text-xl :">Updated Movie :</h2>
      <br />  
      {data?.results.map((change) => (
        <UpdateProperty id={change.id} type="movie" key={change.id} />
      ))}
    </ul>
  )
}

export default UpdateMovie