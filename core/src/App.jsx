import { 
  About, 
  Hero, 
  Navbar
} from "./sections"

function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
