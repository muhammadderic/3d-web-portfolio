import { 
  About, 
  Clients, 
  Hero, 
  Navbar,
  Projects
} from "./sections"

function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />

      {/* "Hero" need to add 3D contents */}
      <Hero />

      {/* "About" need to add 3D contents */}
      <About /> 

      {/* "Projects" need to add 3D contents */}
      <Projects />

      <Clients />
    </main>
  )
}

export default App
