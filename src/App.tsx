import { Timer } from './components/Timer';
import { ThemeProvider } from './components/ThemeProvider';
import { TimerConfigProvider } from './components/TimerConfigProvider';
import { TimerNavigationProvider } from './components/TimerNavigationProvider';
import {
  TimerConfigurationModalProvider
} from './components/TimerConfigurationModalProvider/TimerConfigurationModalProvider';
import { useForm, FormProvider } from "react-hook-form";
import { TimerNotificationProvider } from './components/TimerNotificationProvider';

function App() {
  const methods = useForm();

  return (
    <ThemeProvider>
      <TimerNotificationProvider>
        <TimerNavigationProvider>
          <TimerConfigProvider>
            <FormProvider {...methods} >
              <TimerConfigurationModalProvider>
                <Timer/>
              </TimerConfigurationModalProvider>
            </FormProvider>
          </TimerConfigProvider>
        </TimerNavigationProvider>
      </TimerNotificationProvider>
    </ThemeProvider>
  )
}

export default App
