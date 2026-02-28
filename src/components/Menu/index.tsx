import styles from './styles.module.css';

import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  // hook para atualizar a variável de tema
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, // para pegar o clique que abriria o link
  ) {
    event.preventDefault(); // Não abre o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  // hook para limpar e atualizar a página
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // função de cleanup
    return () => {
      console.log('Função de cleanup');
    };
  }, [theme]); // executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Go to home"
        title="Go to home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="History"
        title="History"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Settings"
        title="Settings"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Change theme"
        title="Change theme"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
