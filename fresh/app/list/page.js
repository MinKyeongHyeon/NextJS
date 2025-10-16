import Link from "next/link";

function List() {
  return (
    <div>
      <h2>이 페이지는 라우팅된 페이지입니다.</h2>
      <p>
        폴더를 새로 만드는 것만으로도 라우팅을 할 수 있다니 정말 신기하군요?
      </p>
      <Link href="/list/detail" className="underline text-red-600">
        여기를 누르면 이렇게 다중으로 라우팅할 수 있습니다.
      </Link>
    </div>
  );
}
export default List;
