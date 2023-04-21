import React,{useRef} from 'react'
import "./App.css";
import {
  Inputs,
  Selet,
  Semana,
  Total,
  Botones,
  Inputs2,
} from "./components/Selet";
import {useReactToPrint} from 'react-to-print';



export const ComponentToPrint = React.forwardRef(() => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div ref={componentRef} className="App">
      
    <nav className="navbar navbar-light bg-light">
      <img
        src="https://raw.githubusercontent.com/moisesjusto/moises-cal/main/img/favicon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo de Moises"
        loading="lazy"
      />
      Moises Pacas
    </nav>
    <div className="card-group m-2">
      <div className="card col-md-3 m-1">
        <p className="h2 text-center">Ajustes</p>
        <div className="card-body">
          <Selet />
        </div>
      </div>
      <Inputs name1={"A1"} name2={"A2"} monto={"A"} />
      <Inputs2 name1={"B1"} name2={"B2"} monto={"B"} />
      <Semana />
    </div>
    <Total />

    <Botones onclick={handlePrint} />
  </div>

  );
});

const App = () => {

  return (
      <ComponentToPrint />
  );
};

export default App;
