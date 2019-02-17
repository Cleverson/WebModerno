import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'
// import Multi, { BoaNoite } from './componentes/Multiplos'
// import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome="Cleverson" />, document.getElementById('root'))
// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     <Saudacao tipo="Bom dia" nome="João" />,
//     document.getElementById('root')
// )

ReactDOM.render(
    <Pai nome="Paulo" sobrenome="Silva">
        {/* Como passo os componentes Filhos aqui */}
        <Filho nome="Pedro" />
        <Filho nome="Paulo" />
        <Filho nome="Carla" />
    </Pai>,
    document.getElementById('root')
)
