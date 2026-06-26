import { Button } from "@/components/ui/button";
import { useDecreaseCount, useIncreaseCount } from "@/store/count";

export default function Controller() {
  // ❌ 스토어 전체를 불러오면 count 변경 시에도 버튼의 불필요한 리렌더링 발생
  // const { increase, decrease } = useCountStore();

  // ✅ 셀렉터 함수로 필요한 값만 불러오면 count 변경 시 버튼의 불필요한 리렌더링 방지
  // const increase = useCountStore((store) => store.increase);
  // const decrease = useCountStore((store) => store.decrease);

  // ✅ actions 객체로 묶기
  // const { increase, decrease } = useCountStore((store) => store.actions);

  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
