import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/BookMarks/Bookmarks'
import Header from './components/header/header'
function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
