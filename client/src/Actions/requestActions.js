import axios from 'axios'
import { CART_CLEAR_ITEMS } from '../Constants/cartConstants'
import {
  REQUEST_CREATE_REQUEST,
  REQUEST_CREATE_SUCCESS,
  REQUEST_CREATE_FAIL,
  REQUEST_DETAILS_FAIL,
  REQUEST_DETAILS_SUCCESS,
  REQUEST_DETAILS_REQUEST,
  REQUEST_PAY_FAIL,
  REQUEST_PAY_SUCCESS,
  REQUEST_PAY_REQUEST,
  REQUEST_LIST_MY_REQUEST,
  REQUEST_LIST_MY_SUCCESS,
  REQUEST_LIST_MY_FAIL,
  REQUEST_LIST_FAIL,
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_REQUEST,
  REQUEST_DELIVER_FAIL,
  REQUEST_DELIVER_SUCCESS,
  REQUEST_DELIVER_REQUEST,
} from '../Constants/requestConstants'
import { logout } from './userActions'

export const createRequest = (request) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/requests`, request, config)

    dispatch({
      type: REQUEST_CREATE_SUCCESS,
      payload: data,
    })
    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    })
    localStorage.removeItem('cartItems')
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: REQUEST_CREATE_FAIL,
      payload: message,
    })
  }
}

export const getRequestDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/requests/${id}`, config)

    dispatch({
      type: REQUEST_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: REQUEST_DETAILS_FAIL,
      payload: message,
    })
  }
}

export const payRequest =
  (requestId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: REQUEST_PAY_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.put(
        `/api/requests/${requestId}/pay`,
        paymentResult,
        config
      )

      dispatch({
        type: REQUEST_PAY_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: REQUEST_PAY_FAIL,
        payload: message,
      })
    }
  }
export const payRequestAdmin = (requestId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_PAY_REQUEST,
    })

    const { data } = await axios.put(`/api/requests/${requestId}/pay`)

    dispatch({
      type: REQUEST_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: REQUEST_PAY_FAIL,
      payload: message,
    })
  }
}

export const deliverRequest = (request) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_DELIVER_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/requests/${request._id}/deliver`,
      {},
      config
    )

    dispatch({
      type: REQUEST_DELIVER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: REQUEST_DELIVER_FAIL,
      payload: message,
    })
  }
}

export const listMyRequests = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/requests/myrequests`, config)

    dispatch({
      type: REQUEST_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: REQUEST_LIST_MY_FAIL,
      payload: message,
    })
  }
}

export const listRequests = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUEST_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/requests`, config)

    dispatch({
      type: REQUEST_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: REQUEST_LIST_FAIL,
      payload: message,
    })
  }
}
