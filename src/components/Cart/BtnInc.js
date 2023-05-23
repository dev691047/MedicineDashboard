import { useStore } from "../../store/CartProvider";

const BtnInc = (props) => {
  // const [inc, setInc] = useState(0);
  const store = useStore();
  function incftn() {
    store.addItem({ id: props.item_id, count: 1 });
  }
  return (
    <button style={props.style} onClick={incftn}>
      +
    </button>
  );
};
export default BtnInc;
