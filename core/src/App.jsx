import { 
  About, 
  Clients, 
  Contact, 
  Hero, 
  Navbar,
  Projects,
  WorkExperiences
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

      {/* "WorkExperiences" need to add 3D contents */}
      <WorkExperiences />

      {/* "Contact" need to use emailjs */}
      <Contact />
    </main>
  )
}

export default App
