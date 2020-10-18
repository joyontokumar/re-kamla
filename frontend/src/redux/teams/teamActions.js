import {
  TEAM_MEMBERS_REQUEST,
  TEAM_MEMBERS_SUCCESS,
  TEAM_MEMBER_ERROR,
} from './teamTypes'
import axios from 'axios'

const memberRequest = () => {
  return {
    type: TEAM_MEMBERS_REQUEST,
  }
}

const memberSuccess = (members) => {
  return {
    type: TEAM_MEMBERS_SUCCESS,
    payload: members,
  }
}

const memberError = (error) => {
  return {
    type: TEAM_MEMBER_ERROR,
    payload: error,
  }
}

export const fetchMember = () => {
  return function (dispatch) {
    dispatch(memberRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        // res.data
        const members = res.data.map((user) => {
          return user.name
        })
        dispatch(memberSuccess(members))
      })
      .catch((error) => {
        // error.match
        dispatch(memberError(error.message))
      })
  }
}
