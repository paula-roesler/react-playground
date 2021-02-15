import React from 'react'
import AppHeader from '../AppHeader'
import Card from '../Card'
import './App.css'

export default function App() {
  return (
    <>
      <AppHeader title="Hier steht der Header" />
      <section className="App">
        <Card
          radius="10"
          color="cadetBlue"
          question="Hier steht die Frage 1"
          answer="Hier steht die Antwort 1"
          showAnswer
        />
        <Card
          radius="10"
          color="darkgoldenrod"
          question="Hier steht die Frage 2"
          answer="Hier steht die Antwort 2"
        />
        <Card
          radius="10"
          color="lightpink"
          question="Hier steht die Frage 3"
          answer="Hier steht die Antwort 3"
          showAnswer
        />
      </section>
    </>
  )
}
