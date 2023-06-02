import { Timer } from './components/Timer';
import { ThemeProvider } from './components/ThemeProvider';
import { TimerConfigProvider } from './components/TimerConfigProvider';
import { TimerNavigationProvider } from './components/TimerNavigationProvider';

function App() {
  return (
    <ThemeProvider>
      <TimerConfigProvider>
        <TimerNavigationProvider>
          <Timer/>
        </TimerNavigationProvider>
      </TimerConfigProvider>
    </ThemeProvider>
  )
}

export default App
