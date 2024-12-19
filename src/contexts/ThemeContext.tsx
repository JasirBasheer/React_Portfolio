import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  themeMode: string;
  switchTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<string>('dark');

  const switchTheme = (theme: string) => {
    setThemeMode(theme);
    document.documentElement.className = theme; 
  };

  return (
    <ThemeContext.Provider value={{ themeMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
