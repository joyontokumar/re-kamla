import { combineReducers } from 'redux'
import {
  TEAM_MEMBERS_REQUEST,
  TEAM_MEMBERS_SUCCESS,
  TEAM_MEMBER_ERROR,
} from './teamTypes'

const initalState = {
  loading: false,
  members: [],
  error: '',
}

export const teamReducer = (state = initalState, action) => {
  switch (action.type) {
    case TEAM_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: action.payload,
        error: '',
      }
    case TEAM_MEMBER_ERROR:
      return {
        ...state,
        loading: false,
        members: [],
        error: action.payload,
      }
  }
}
