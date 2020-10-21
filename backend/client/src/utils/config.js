import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

import {
  InitialOptions,
  YesNoOptions,
  YesNoOptionsHealth,
  YesNoOptionsProtibondi,
  YesNoOptionsChild,
  YesNoOptionsChldrenHearing,
  YesNoOptionsChldrenHearingGlass,
} from './SelectOptions'
import LinkList from './LinkList'

const config = {
  botName: 'DRRA E-Health',
  initialMessages: [
    createChatBotMessage(
      ' হ্যালো !! আপনি ডিজ্যাবল্ড রিহ্যাবিলিটেশন এন্ড রিসার্চ এসোসিয়েশন (ডি আর আর এ) ই-রিহ্যাব প্লাটফরম সেবাই প্রবেশ করেছেন আপনাকে স্বাগতম',
      {
        widget: 'knowAboutChildrenDisease',
      },
    ),
  ],

  widgets: [
    {
      widgetName: 'knowAboutChildrenDisease',
      widgetFunc: (props) => <InitialOptions {...props} />,
    },
    {
      widgetName: 'knowAboutOurService',
      widgetFunc: (props) => <YesNoOptions {...props} />,
    },
    {
      widgetName: 'patienthealthknow',
      widgetFunc: (props) => <YesNoOptionsHealth {...props} />,
    },
    {
      widgetName: 'protibondiproblem',
      widgetFunc: (props) => <YesNoOptionsProtibondi {...props} />,
    },
    {
      widgetName: 'childrenproblem',
      widgetFunc: (props) => <YesNoOptionsChild {...props} />,
    },
    {
      widgetName: 'childrenHearingproblem',
      widgetFunc: (props) => <YesNoOptionsChldrenHearing {...props} />,
    },
    {
      widgetName: 'childrenHearingGlass',
      widgetFunc: (props) => <YesNoOptionsChldrenHearingGlass {...props} />,
    },

    {
      widgetName: 'suggestedoctor',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'বিশেষজ্ঞ ডাক্তার',
            url: '/physiotherapist',
            id: 1,
          },
          {
            text: '0194853352',
            id: 2,
          },
        ],
      },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
}

export default config
