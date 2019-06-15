import React from 'react'

export default function About() {
  return (
    <React.Fragment className="aboutSec">
    <div className="aboutCont" >
      <h1 style={{flex: '10', padding: '5px', fontFamily: 'Pacifico', fontWeight: '600', textAlign: 'center'}}>About</h1>
      <p style={{flex: '10', padding: '5px', fontFamily: 'Cinzel', fontWeight: '600', textAlign: 'center'}}>This is a simple to do list app</p>
    </div>
    </React.Fragment>
  )
}
