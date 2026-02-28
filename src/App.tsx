import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {
  // // lazy initialization
  // // const [numero, setNumero] = useState(() => {
  // //   return 0;
  // // });
  // const [numero, setNumero] = useState(0);

  // function handleClick() {
  //   // setNumero(1);
  //   setNumero((prevState) => prevState + 1);
  // }

  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              id="input"
              labelText="Task"
              type="text"
              placeholder="Enter a task..."
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

// <div className="container-fluid">
//   <div className="container">
//     <div className="content">
//       <section>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
//         hic enim soluta. Vel perspiciatis dolore eveniet voluptate ab hic
//         nam ratione. Deleniti magni est beatae labore dolor ducimus
//         consequatur perspiciatis?
//       </section>
//     </div>
//   </div>
// </div>

// .container-fluid {
//   margin: auto;
// }

// .container {
//   max-width: 98rem;
//   margin: 0 auto;
// }

// .content {
//   margin: 3.2rem;
// }
