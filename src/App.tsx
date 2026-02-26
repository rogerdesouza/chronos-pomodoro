import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {
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
        <section>Footer</section>
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
