import Link from 'next/link'
import React from 'react'

function welcome() {
  return (
    <div className="p-9 bg-red-300">
      <div className="text-3xl">
        Welcome to the Welcome page!
      </div>
      <br/>
      <Link href="/" className="p-5 bg-red-200 inline-block">
        Back to landing
      </Link>
    </div>
  )
}

export default welcome
