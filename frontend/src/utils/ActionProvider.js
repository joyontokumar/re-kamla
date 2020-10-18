class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
  }

  // inital health question
  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      'আপনার বা আপনার শিশুর প্রতিবন্ধিতার ধরন/সমস্যা স¤পর্কে জানেন?',
      {
        widget: 'knowAboutOurService',
      },
    )

    this.updateChatbotState(message)
  }

  // know health
  handleHealthKnow = () => {
    const message = this.createChatBotMessage(
      'আপনি যদি আমাদের সেবা সম্পর্কে জানতে চান,',
      {
        widget: 'patienthealthknow',
      },
    )

    this.updateChatbotState(message)
  }

  // protibondi sonakktokoron problem
  handleProtibondiproblem = () => {
    const message = this.createChatBotMessage(
      'প্রতিবন্ধিতা সনাক্তকরন সংক্রান্ত সেবা ',
      {
        widget: 'protibondiproblem',
      },
    )

    this.updateChatbotState(message)
  }

  // child problem
  handleChildproblem = () => {
    const message = this.createChatBotMessage(
      'ব্যক্তি/শিশুর চোখে দেখতে কি অসুবিধা হয়?',
      {
        widget: 'childrenproblem',
      },
    )

    this.updateChatbotState(message)
  }

  handleChildHearing = () => {
    const message = this.createChatBotMessage(
      'ব্যক্তি/শিশুর দেখার সুবিধার্থে চশমা পড়েন?',
      {
        widget: 'childrenHearingproblem',
      },
    )

    this.updateChatbotState(message)
  }

  // childhearingyesno
  handleChildhearingyesno = () => {
    const message = this.createChatBotMessage(
      'ব্যক্তি/শিশুর কি চশমা পরা সত্ত্বেও চোখে দেখতে অসুবিধা হয়?',
      {
        widget: 'childrenHearingGlass',
      },
    )

    this.updateChatbotState(message)
  }

  // doctor call
  handleDoctorCall = () => {
    const message = this.createChatBotMessage(
      'যে কোন একজন ডাক্তার কে কল দিতে আপনার পছন্দ মত অপশনটি টাইপ/ক্লিক করুন',
      {
        widget: 'doctorcall',
      },
    )

    this.updateChatbotState(message)
  }

  // suggested doctor
  handleSuggestedDoctors = () => {
    const message = this.createChatBotMessage(
      'যে কোন একজন ডাক্তার কে কল দিতে আপনার পছন্দ মত অপশনটি টাইপ/ক্লিক করুন',
      {
        widget: 'suggestedoctor',
      },
    )

    this.updateChatbotState(message)
  }

  // inital
  handleFlowToInitialState = () => {
    const message = this.createChatBotMessage(
      ' হ্যালো !! আপনি ডিজ্যাবল্ড রিহ্যাবিলিটেশন এন্ড রিসার্চ এসোসিয়েশন (ডি আর আর এ) ই-রিহ্যাব প্লাটফরম সেবাই প্রবেশ করেছেন আপনাকে স্বাগতম',
      {
        widget: 'knowAboutChildrenDisease',
      },
    )

    this.updateChatbotState(message)
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }
}

export default ActionProvider
