import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increaseOne: () => void;
    decreaseOne: () => void;
  };
};

export const useCountStore = create<Store>((set, get) => ({
  count: 0,
  actions: {
    increaseOne: () => {
      // get 메서드 사용 예시
      // const count = get().count;
      // set({ count: count + 1 });

      // set 함수형 업데이트 예시
      set((store) => ({
        count: store.count + 1,
      }));
    },
    decreaseOne: () => {
      set((store) => ({
        count: store.count - 1,
      }));
    },
  },
}));

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
