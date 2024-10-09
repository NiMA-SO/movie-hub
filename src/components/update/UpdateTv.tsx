import useUpdate from "../../hooks/useUpdate";
import UpdateProperty from "./UpdateProperty";

const UpdateTv = () => {
  const { data } = useUpdate('tv');

  return (
    <ul className="w-full grid grid-cols-2 gap-3 auto-rows-[minmax(100px, auto)]">
      <h2 className="text-xl :">Updated series :</h2>
      <br />  
      {data?.results.map((change) => (
        <UpdateProperty id={change.id} type="tv" key={change.id} />
      ))}
    </ul>
  );
};

export default UpdateTv;
