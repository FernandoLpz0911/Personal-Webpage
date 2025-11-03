import './cssfiles/Home.css'

function Home() {
  return (
    <>
      <div className='puzzle-container'>
        <div className='puzzle-piece' id="piece1"></div>
        <div className='puzzle-piece' id="piece2"></div>
      </div>
      <div className='home-container'>
        <h1>Fernando Lopez</h1>
        <p>I am a Software Developer that currently specializes in Front-end. Back-end will be next.</p>  
      </div>
    </>
  )
}

export default Home
