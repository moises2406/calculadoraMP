import { Cuenta } from "../controllers/Sumar";
import { useBearStore } from "../static/zustan";


interface Couts {
  name1: string;
  name2: string;
  monto: string;
}

export function Selet() {
  const { increase, modifica, diasDeSemanas, Result } = useBearStore();

  const stado = (e: string) => {
    modifica({ count1: 0, count2: 0, count3: 0, count4: 0 });
    diasDeSemanas({ l: 0, m: 0, ml: 0, j: 0, v: 0 });
    Result({ D1: 0, V: 0, E: 0, D2: 0, T: 0, ps1: 0, ps2: 0 });
    switch (e) {
      case "0":
        increase({ numero1: 150, numero2: 175, NN: "0" });
        break;
      case "1":
        increase({ numero1: 125, numero2: 150, NN: "1" });
        break;
      case "2":
        increase({ numero1: 100, numero2: 125, NN: "0" });
        break;
      case "3":
        increase({ numero1: 75, numero2: 100, NN: "1" });
        break;
      case "tere":
        increase({ numero1: 150, numero2: 200, NN: "0" });
        break;
      default:
        increase({ numero1: 0, numero2: 0, NN: "2" });
        break;
    }
  };

  return (
    <div>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={(e) => stado(e.target.value)}
      >
        <option selected>seleciona</option>
        <option value="tere">tere</option>
        <option value="0">150/175</option>
        <option value="1">125/150</option>
        <option value="2">100/125</option>
        <option value="3">75/100</option>
      </select>
      <Descuento />
    </div>
  );
}

function Descuento(): JSX.Element {
  const { NN } = useBearStore();
  if (NN === "0") {
    return (
      <div>
        <p className="form-control m-1 text-center">desalluno:$50</p>
        <p className="form-control m-1 text-center">funda: $150</p>
        <p className="form-control m-1 text-center">total: $200</p>
      </div>
    );
  } else if (NN === "1") {
    return (
      <div>
        <p className="form-control m-1 text-center">desalluno:$150</p>
        <p className="form-control m-1 text-center">funda: $0</p>
        <p className="form-control m-1 text-center">total: $150</p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="form-control m-1 text-center">Seleciona un monto</p>
      </div>
    );
  }
}
export function Inputs({ name1, name2, monto }: Couts) {
  const {
    count1,
    count2,
    count3,
    count4,
    modifica,
    numero1,
    numero2,
    ps1,
    D1,
  } = useBearStore();
  const stado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const N = parseFloat(e.target.value);
    if (`${N}` === "NaN") {
      console.log("ok");
    } else {
      switch (e.target.name) {
        case "A1":
          modifica({ count1: N, count2, count3, count4 });
          break;

        default:
          modifica({ count1, count2: N, count3, count4 });
          break;
      }
    }
  };

  const M = () => {
    if (monto === "A") {
      return <p className="h2 text-center">${numero1}</p>;
    } else {
      return <p className="h2 text-center">${numero2}</p>;
    }
  };
  return (
    <div className="card col-md-3 m-1">
      <M />
      <div className="card-body">
        <input
          type="text"
          name={name1}
          className="form-control m-1 text-center"
          placeholder="Salida"
          onChange={(e) => stado(e)}
          value={count1}
        />
        <input
          type="text"
          name={name2}
          className="form-control m-1 text-center"
          placeholder="Entrada"
          onChange={(e) => stado(e)}
          value={count2}
        />
        <p className="form-control m-1 text-center">{ps1}</p>
        <p className="form-control m-1 text-center">{D1}</p>
      </div>
    </div>
  );
}
export function Inputs2({ name1, name2, monto }: Couts) {
  const {
    count1,
    count2,
    count3,
    count4,
    modifica,
    numero1,
    numero2,
    ps2,
    D2,
  } = useBearStore();
  const stado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const N = parseFloat(e.target.value);
    if (`${N}` === "NaN") {
      console.log("ok");
    } else {
      switch (e.target.name) {
        case "B1":
          modifica({ count1, count2, count3: N, count4 });
          break;
        default:
          modifica({ count1, count2, count3, count4: N });
          break;
      }
    }
  };

  const M = () => {
    if (monto === "A") {
      return <p className="h2 text-center">${numero1}</p>;
    } else {
      return <p className="h2 text-center">${numero2}</p>;
    }
  };
  return (
    <div className="card col-md-3 m-1">
      <M />
      <div className="card-body">
        <input
          type="text"
          name={name1}
          className="form-control m-1 text-center"
          placeholder="Salida"
          onChange={(e) => stado(e)}
          value={count3}
        />
        <input
          type="text"
          name={name2}
          className="form-control m-1 text-center"
          placeholder="Entrada"
          onChange={(e) => stado(e)}
          value={count4}
        />
        <p className="form-control m-1 text-center">{ps2}</p>
        <p className="form-control m-1 text-center">{D2}</p>
      </div>
    </div>
  );
}

export function Semana() {
  const { NN, diasDeSemanas, l, m, ml, j, v } = useBearStore();
  const stado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const N = parseInt(e.target.value);
    if (`${N}` === "NaN") {
      console.log("ok");
    } else {
      switch (e.target.name) {
        case "D1":
          diasDeSemanas({ l: N, m, ml, j, v });
          break;
        case "D2":
          diasDeSemanas({ l, m: N, ml, j, v });
          break;
        case "D3":
          diasDeSemanas({ l, m, ml: N, j, v });
          break;
        case "D4":
          diasDeSemanas({ l, m, ml, j: N, v });
          break;
        default:
          diasDeSemanas({ l, m, ml, j, v: N });
          break;
      }
    }
  };
  if (NN === "0") {
    return (
      <div className="card col-md-3 m-1">
        <p className="h2 text-center">Dias De La Semana</p>
        <div className="card-body">
          <input
            type="text"
            name="D1"
            onChange={(e) => stado(e)}
            value={l}
            className="form-control m-1 text-center"
            placeholder="Lunes"
          />
        </div>
      </div>
    );
  } else if (NN === "1") {
    return (
      <div className="card col-md-3 m-1">
        <p className="h2 text-center">Dias De La Semana</p>
        <div className="card-body">
          <input
            type="text"
            name="D2"
            onChange={(e) => stado(e)}
            value={m}
            className="form-control m-1 text-center"
            placeholder="Martes"
          />
          <input
            type="text"
            name="D3"
            onChange={(e) => stado(e)}
            value={ml}
            className="form-control m-1 text-center"
            placeholder="Miercoles"
          />
          <input
            type="text"
            name="D4"
            onChange={(e) => stado(e)}
            value={j}
            className="form-control m-1 text-center"
            placeholder="Jueves"
          />
          <input
            type="text"
            name="D5"
            onChange={(e) => stado(e)}
            value={v}
            className="form-control m-1 text-center"
            placeholder="Viernes"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card col-md-3 m-1">
        <p className="h2 text-center">Dias De La Semana</p>
        <div className="card-body">
          <p className="form-control m-1 text-center">Seleciona un monto</p>
        </div>
      </div>
    );
  }
}

export function Total() {
  const { E, V, T } = useBearStore();
  return (
    <div className="row p-3 col-md-3">
      <p className="form-control m-1 text-center">{E}</p>
      <p className="form-control m-1 text-center">{V}</p>
      <p className="form-control m-1 text-center">{T}</p>
    </div>
  );
}

export function Botones() {
  interface Mdt {
    ps1: number;
    D1: number;
    ps2: number;
    D2: number;
    E: number;
    V: number;
    T: number;
  }
  const {
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
    Result,
  } = useBearStore();
  const Dt = () => {
    const res: Mdt = Cuenta({
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
    });
    Result(res);
  };
  return (
    <div className="row p-3 col-md-3">
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={() => Dt()}
      >
        Sumar
      </button>
      <button type="button" className="btn btn-warning m-2">
        Imprimir
      </button>
    </div>
  );
}

