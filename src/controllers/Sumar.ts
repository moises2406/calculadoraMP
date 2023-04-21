interface Misuma {
  count1: number;
  count2: number;
  count3: number;
  count4: number;
  numero1: number;
  numero2: number;
  l: number;
  m: number;
  ml: number;
  j: number;
  v: number;
  NN: string;
}
export const Cuenta = ({
  count1,
  count2,
  count3,
  count4,
  numero1,
  numero2,
  l,
  m,
  ml,
  j,
  v,
  NN,
}: Misuma) => {
  // TODO: multiplicalo por 2
  const c1 = count1 * 2;
  const c2 = count2 * 2;
  const c3 = count3 * 2;
  const c4 = count4 * 2;

  // TODO: restalos
  const c1c2 = c1 - c2;
  const c3c4 = c3 - c4;

  // TODO: multiplicalo el dinero que tinen ue entregar
  const ca1 = c1c2 * numero1;
  const cb1 = c3c4 * numero2;
  const cc1 = ca1 + cb1;

  // TODO: multiplicalo por el dinero del semana
  const sum = m + ml + j + v;

  // TODO: multiplicalo y saca el resultado
  if (NN === "0") {
    return {
      ps1: c1c2,
      D1: ca1,
      ps2: c3c4,
      D2: cb1,
      E: cc1 - 200,
      V: l,
      T: l - cc1 + 200,
    };
  } else if (NN === "1") {
    return {
      ps1: c1c2,
      D1: ca1,
      ps2: c3c4,
      D2: cb1,
      E: cc1 - 150,
      V: sum,
      T: sum - cc1 + 150,
    };
  } else {
    return {
      ps1: c1c2,
      D1: ca1,
      ps2: c3c4,
      D2: cb1,
      E: cc1,
      V: sum,
      T: sum - cc1 + 150,
    };
  }
};
