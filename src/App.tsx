import { Timer } from './components/Timer';
import { ThemeProvider } from './components/ThemeProvider';
import { TimerConfigProvider } from './components/TimerConfigProvider';
import { TimerNavigationProvider } from './components/TimerNavigationProvider';
import {
  TimerConfigurationModalProvider
} from './components/TimerConfigurationModalProvider/TimerConfigurationModalProvider';

function App() {
  return (
    <ThemeProvider>
      <TimerConfigProvider>
        <TimerConfigurationModalProvider>
          <TimerNavigationProvider>
            <Timer/>
          </TimerNavigationProvider>
        </TimerConfigurationModalProvider>
      </TimerConfigProvider>
    </ThemeProvider>
  )
}

export default App
