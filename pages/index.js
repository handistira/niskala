import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Contents from '../components/contents'
export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Header/>
    </div>
    <div>
      <Contents/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
