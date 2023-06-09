import styled from 'styled-components'

const Titulo = styled.h1`
  color: red;
  font-size: 50px;
  text-align: center;
  font-weight: 200;
  font-family:'Noto Sans', sans-serif;
`
const DivAArrastrar = styled.div`
  width: 100px;
  height: 100px;
  background-color: red; 
`
const DivADondeVoyAArrastrar = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: blue;
`
function App() {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'rojo');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'rojo') {
      e.target.appendChild(document.getElementById('cuadro-rojo'));
    }
  };

  return (
    <>

      <Titulo>Calendario re flashero</Titulo>
      <p>Esto es un calendario</p>
      <DivAArrastrar id="cuadro-rojo" draggable="true" onDragStart={handleDragStart}>
        Arrastrame
      </DivAArrastrar>
      <DivADondeVoyAArrastrar onDragOver={handleDragOver} onDrop={handleDrop}>
        Aca voy a caer
      </DivADondeVoyAArrastrar>
    </>
  );
}

export default App
