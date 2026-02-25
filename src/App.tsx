import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import {
  HomeIcon,
  LightbulbIcon,
  RefreshCwIcon,
  TableConfigIcon,
} from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        <button>
          <HomeIcon />
        </button>
        <button>
          <RefreshCwIcon />
        </button>
        <button>
          <TableConfigIcon />
        </button>
        <button>
          <LightbulbIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi
        vitae sunt eum, ab sit ipsum, voluptas facilis quo unde provident?
        Facere cumque ullam nulla cupiditate vel, laboriosam officiis voluptas?
      </p>
    </>
  );
}
