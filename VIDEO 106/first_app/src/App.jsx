// Importing Navbar, Footer, and Card components
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"

function App() {

  return (
    <>
      {/* Render the Navbar at the top */}
      <Navbar/>
      <div className="cardBlock">
        {/* Render multiple Card components with different props */}
        <Card title = "card 1" description = "This is card 1." />
        <Card title = "card 2" description = "This is card 2." />
        <Card title = "card 3" description = "This is card 3." />
        <Card title = "card 4" description = "This is card 4." />
      </div>
      {/* Render the Footer at the bottom */}
      <Footer/>
    </>
  )
}

export default App
