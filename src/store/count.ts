import { create } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  subscribeWithSelector(
    // ✅ immer 덕분에 직접 값을 변경하는 방식으로 작성 가능
    immer(
      // combine: 첫 번째 인수 = State, 두 번째 인수 = 액션 함수
      // → State 타입이 자동 추론되어 별도 타입 정의 불필요
      combine({ count: 0 }, (set, get) => ({
        actions: {
          increaseOne: () => {
            set((state) => {
              state.count++;
            });
          },
          decreaseOne: () => {
            set((state) => {
              state.count--;
            });
          },
        },
      })),
    ),
  ),
);

// count 값이 변경될 때마다 리스너 실행
useCountStore.subscribe(
  (store) => store.count, // 셀렉터: 구독 대상
  (count, prevCount) => {
    // 리스너: 변경 시 실행
    console.log(count, prevCount);
  },
);

// type Store = {
//   count: number;
//   actions: {
//     increaseOne: () => void;
//     decreaseOne: () => void;
//   };
// };

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increaseOne: () => {
//       // get 메서드 사용 예시
//       // const count = get().count;
//       // set({ count: count + 1 });

//       // set 함수형 업데이트 예시
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decreaseOne: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

// 전용 커스텀 훅 사용 시 store 내부가 바뀌어도 수정 불필요
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increaseOne);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decreaseOne);
  return decrease;
};
