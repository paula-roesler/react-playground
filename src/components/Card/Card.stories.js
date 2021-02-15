import './Card.css'
import Card from './Card'
import React from 'react'

export default {
  title: 'Card',
  component: Card,
}

export const defaultCard = () => (
  <Card
    radius="10"
    color="cadetBlue"
    question="Hier steht die Frage Default"
    answer="Hier steht die Antwort Default"
    showAnswer
  />
)
