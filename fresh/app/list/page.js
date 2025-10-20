"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function List() {
  let product = ["Tomatoes", "Pasta", "Coconut"];
  let [amount, setAmount] = useState([0, 0, 0]);

  return (
    <div>
      <h2>이 페이지는 라우팅된 페이지입니다.</h2>
      <p>
        폴더를 새로 만드는 것만으로도 라우팅을 할 수 있다니 정말 신기하군요?
      </p>
      <p>map으로 아이템도 나열해 보았습니다.</p>
      {product.map((v, i) => {
        return (
          <div
            key={i}
            className="bg-gray-50 hover:bg-gray-300 flex flex-col items-center"
          >
            <Image src={`/food${i}.png`} alt={v} width={120} height={120} />
            <h4>{v} 40$</h4>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  let copy = [...amount];
                  copy[i]--;
                  setAmount(copy);
                }}
              >
                -
              </button>
              <p>{amount[i]}</p>
              <button
                type="button"
                onClick={() => {
                  let add = [...amount];
                  add[i]++;
                  setAmount(add);
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <Link href="/list/detail" className="underline text-red-600">
        여기를 누르면 이렇게 다중으로 라우팅할 수 있습니다.
      </Link>
    </div>
  );
}
export default List;
