import { StatusBar } from 'expo-status-bar'
import Welcome from './welcome';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Welcome />
    </>
  )
}
