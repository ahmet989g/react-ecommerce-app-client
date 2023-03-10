import React from 'react'
import Navbar from "../../components/Navbar";

function ErrorElement() {
  return (
    <>
        <Navbar />
        <div id="content">
            <h1>Sayfa Bulunamadı!!!</h1>
        </div>
    </>
  )
}

export default ErrorElement
