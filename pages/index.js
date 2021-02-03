import Contents from '../components/contents'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
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
