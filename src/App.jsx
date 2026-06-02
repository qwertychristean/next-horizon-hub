import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Success from './pages/Success'
import Roadmap from './pages/Roadmap'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/success" element={<Success />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  )
}

export default App