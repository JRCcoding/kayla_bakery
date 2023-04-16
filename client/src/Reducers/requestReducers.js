import {
  REQUEST_CREATE_REQUEST,
  REQUEST_CREATE_SUCCESS,
  REQUEST_CREATE_FAIL,
  REQUEST_DETAILS_REQUEST,
  REQUEST_DETAILS_SUCCESS,
  REQUEST_DETAILS_FAIL,
  REQUEST_PAY_REQUEST,
  REQUEST_PAY_FAIL,
  REQUEST_PAY_SUCCESS,
  REQUEST_PAY_RESET,
  REQUEST_LIST_MY_REQUEST,
  REQUEST_LIST_MY_SUCCESS,
  REQUEST_LIST_MY_FAIL,
  REQUEST_LIST_MY_RESET,
  REQUEST_LIST_FAIL,
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_REQUEST,
  REQUEST_DELIVER_FAIL,
  REQUEST_DELIVER_SUCCESS,
  REQUEST_DELIVER_REQUEST,
  REQUEST_DELIVER_RESET,
  REQUEST_CREATE_RESET,
} from '../Constants/requestConstants'

export const requestCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_CREATE_REQUEST:
      return {
        loading: true,
      }
    case REQUEST_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        request: action.payload,
      }
    case REQUEST_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case REQUEST_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const requestDetailsReducer = (
  state = { loading: true, requestItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case REQUEST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case REQUEST_DETAILS_SUCCESS:
      return {
        loading: false,
        request: action.payload,
      }
    case REQUEST_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const requestPayReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PAY_REQUEST:
      return {
        loading: true,
      }
    case REQUEST_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case REQUEST_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case REQUEST_PAY_RESET:
      return {}
    default:
      return state
  }
}

export const requestDeliverReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DELIVER_REQUEST:
      return {
        loading: true,
      }
    case REQUEST_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case REQUEST_DELIVER_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case REQUEST_DELIVER_RESET:
      return {}
    default:
      return state
  }
}

export const requestListMyReducer = (state = { requests: [] }, action) => {
  switch (action.type) {
    case REQUEST_LIST_MY_REQUEST:
      return {
        loading: true,
      }
    case REQUEST_LIST_MY_SUCCESS:
      return {
        loading: false,
        requests: action.payload,
      }
    case REQUEST_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case REQUEST_LIST_MY_RESET:
      return { requests: [] }
    default:
      return state
  }
}

export const requestListReducer = (state = { requests: [] }, action) => {
  switch (action.type) {
    case REQUEST_LIST_REQUEST:
      return {
        loading: true,
      }
    case REQUEST_LIST_SUCCESS:
      return {
        loading: false,
        requests: action.payload,
      }
    case REQUEST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
