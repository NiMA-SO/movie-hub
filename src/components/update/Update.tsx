import useUpdate from "../../hooks/useUpdate";
import UpdateProperty from "./UpdateProperty";

const Update = () => {
  const { data } = useUpdate();

  return (
    <ul className="w-full grid grid-cols-2 gap-3">
      {data?.results.map((change) => (
        <UpdateProperty seriesId={change.id} key={change.id} />
      ))}
    </ul>
  );
};

export default Update;
