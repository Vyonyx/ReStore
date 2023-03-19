import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import Catalog from '../../features/catalog/Catalog'
import Header from './Header'
import './styles.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const paletteMode = darkMode ? "dark" : "light"

  const theme = createTheme({
    palette: {
      mode: paletteMode,
      background: {
        default: paletteMode === "light" ? "#eaeaea" : "#121212"
      }
    }
  })

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
