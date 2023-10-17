import React from 'react'

export default function Footer() {
  let footerStyle = {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "15px 0px",
    marginTop: "35px",
    fontSize: "18px",
    position: "relative",
    bottom: "0px"
  }
  
  return (
    <footer className='footer' style={footerStyle}>
        <p style={{marginBottom: "0px"}}>Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}
