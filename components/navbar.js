import React from 'react'
export default function Navbar() {
  return (
    <div className="bg-green-800 ">
      <div className="flex items-center container justify-between text-white p-3">
        <div >
          <a>Niskala</a>
        </div>
        <div className="flex">
          <a className="m-2" href="#">Home</a>
          <a className="m-2" href="#">Team</a>
          <a className="m-2" href="#">Project</a>
          <a className="m-2" href="#">About</a>
        </div>
      </div>
    </div>
  )
}
export default Navbar 