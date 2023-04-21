import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export interface Piesas {
  numero1: number;
  numero2: number;
  NN: string;
}
export interface DiasDeSemanas {
  l: number;
  m: number;
  ml: number;
  j: number;
  v: number;
}
export interface Count {
  count1: number;
  count2: number;
  count3: number;
  count4: number;
}
interface MDT {
  ps1: number;
  D1: number;
  ps2: number;
  D2: number;
  E: number;
  V: number;
  T: number;
}
export interface BearState {
  NN: string;
  numero1: number;
  numero2: number;
  count1: number;
  count2: number;
  count3: number;
  count4: number;
  l: number;
  m: number;
  ml: number;
  j: number;
  v: number;
  ps1: number;
  D1: number;
  ps2: number;
  D2: number;
  E: number;
  V: number;
  T: number;
  increase: (Numeros: Piesas) => void;
  modifica: (Numeros: Count) => void;
  diasDeSemanas: (Numeros: DiasDeSemanas) => void;
  Result: (Numeros: MDT) => void;
}

export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        NN: "2",
        numero1: 0,
        numero2: 0,
        count1: 0,
        count2: 0,
        count3: 0,
        count4: 0,
        l: 0,
        m: 0,
        ml: 0,
        j: 0,
        v: 0,
        ps1: 0,
        D1: 0,
        ps2: 0,
        D2: 0,
        E: 0,
        V: 0,
        T: 0,
        increase: ({ numero1, numero2, NN }: Piesas) =>
          set(() => ({
            numero1,
            numero2,
            NN,
          })),
        modifica: ({ count1, count2, count3, count4 }: Count) =>
          set(() => ({
            count1,
            count2,
            count3,
            count4,
          })),
        diasDeSemanas: ({ l, m, ml, j, v }: DiasDeSemanas) =>
          set(() => ({
            l,
            m,
            ml,
            j,
            v,
          })),
        Result: ({ ps1, D1, ps2, D2, E, V, T }: MDT) =>
          set(() => ({
            ps1,
            D1,
            ps2,
            D2,
            E,
            V,
            T,
          })),
      }),

      {
        name: "bear-storage",
      }
    )
  )
);
