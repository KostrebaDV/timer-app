import { Timer } from './components/Timer';
import { ThemeProvider } from './components/ThemeProvider';
import { TimerConfigProvider } from './components/TimerConfigProvider';
import { TimerNavigationProvider } from './components/TimerNavigationProvider';
import {
  TimerConfigurationModalProvider
} from './components/TimerConfigurationModalProvider/TimerConfigurationModalProvider';
import { useForm, FormProvider } from "react-hook-form";

function App() {
  const methods = useForm();

  return (
    <ThemeProvider>
      <TimerNavigationProvider>
        <TimerConfigProvider>
          <FormProvider {...methods} >
            <TimerConfigurationModalProvider>
              <Timer/>
            </TimerConfigurationModalProvider>
          </FormProvider>
        </TimerConfigProvider>
      </TimerNavigationProvider>
    </ThemeProvider>
  )
}

export default App
