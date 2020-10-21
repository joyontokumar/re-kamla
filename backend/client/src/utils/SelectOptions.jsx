import React from 'react'

// inital option
export const InitialOptions = (props) => {
  console.log(props)
  const options = [
    {
      text: '১। চ্যাটিং এর মাধ্যমে',
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    {
      text: '2। হোয়াটস অ্যাপ কল',
      handler: props.actionProvider.handleJavascriptList,
      id: 2,
    },
  ]

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ))

  return <div className="learning-options-container">{optionsMarkup}</div>
}

// yes no option
export const YesNoOptions = (props) => {
  console.log(props)
  const options = [
    {
      text: '১। হ্যাঁ, জানি',
      handler: props.actionProvider.handleHealthKnow,
      id: 1,
    },
    {
      text: '2। না, জানি না',
      handler: props.actionProvider.handleHealthKnow,
      id: 2,
    },
  ]
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ))

  return <div className="learning-options-container">{optionsMarkup}</div>
}

// health
export const YesNoOptionsHealth = (props) => {
  console.log(props)
  const options = [
    {
      text: '১। হ্যাঁ',
      handler: props.actionProvider.handleProtibondiproblem,
      id: 1,
    },
    {
      text: '2। না',
      handler: props.actionProvider.handleProtibondiproblem,
      id: 2,
    },
  ]
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ))

  return <div className="learning-options-container">{optionsMarkup}</div>
}

export const YesNoOptionsProtibondi = (props) => {
  console.log(props)
  const options = [
    {
      text: '১। হ্যাঁ',
      handler: props.actionProvider.handleChildproblem,
      id: 1,
    },
    {
      text: '2। না',
      handler: props.actionProvider.handleChildproblem,
      id: 2,
    },
  ]
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ))

  return <div className="learning-options-container">{optionsMarkup}</div>
}

// children problem
export const YesNoOptionsChild = (props) => {
  console.log(props)
  const options = [
    {
      text: '১। না, কোন সমস্যা নেই',
      handler: props.actionProvider.handleChildHearing,
      id: 1,
    },
    {
      text: '২। কিছু সমস্যা হয়',
      handler: props.actionProvider.handleChildHearing,
      id: 2,
    },
    {
      text: '৩। অনেক সমস্যা হয়',
      handler: props.actionProvider.handleChildHearing,
      id: 3,
    },
    {
      text: '৪। একেবারেই পারেন না',
      handler: props.actionProvider.handleChildHearing,
      id: 4,
    },
  ]
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ))

  return <div className="learning-options-container">{optionsMarkup}</div>
}

// children problem
export const YesNoOptionsChldrenHearing = (props) => {
  console.log(props)
  const options = [
    {
      text: '১। হ্যাঁ',
      handler: props.actionProvider.handleChildhearingyesno,
      id: 1,
    },
    {
      text: '২। না',
      handler: props.actionProvider.handleChildhearingyesno,
      id: 2,
    },
  ]
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ))

  return <div className="learning-options-container">{optionsMarkup}</div>
}

// child hearing glass

export const YesNoOptionsChldrenHearingGlass = (props) => {
  console.log(props)
  const options = [
    {
      text: '১। না, কোন সমস্যা নেই',
      handler: props.actionProvider.handleSuggestedDoctors,
      id: 1,
    },
  ]
  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ))

  return <div className="learning-options-container">{optionsMarkup}</div>
}
