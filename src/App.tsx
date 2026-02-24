import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2={'String normal'}>
        Olá Mundo!!!
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi
        vitae sunt eum, ab sit ipsum, voluptas facilis quo unde provident?
        Facere cumque ullam nulla cupiditate vel, laboriosam officiis voluptas?
      </p>
    </>
  );
}
