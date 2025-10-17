import Hello from "./hello";
import ColorButton from "./button";

export default function Cart() {
  return (
    <div>
      <Hello />
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <ColorButton color="bg-red-500" />
      <ColorButton color="bg-gray-400" />
    </div>
  );
}
