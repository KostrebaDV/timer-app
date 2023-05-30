import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { Timer } from './components/Timer';

function App() {
  return (
    <ThemeProvider>
      <Timer/>
    </ThemeProvider>
  )
}

export default App
