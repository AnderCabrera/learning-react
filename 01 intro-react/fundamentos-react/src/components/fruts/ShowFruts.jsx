import ItemFrut from "./ItemFrut";

const ShowFruts = ({ fruts }) => {
  return (
    <ul>
      {fruts.map((frut, index) => (
        <ItemFrut key={index} frut={frut} />
      ))}
    </ul>
  );
};

export default ShowFruts;
