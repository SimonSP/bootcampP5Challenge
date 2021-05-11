import axios from 'axios'

//INSTANCIA AXIOS
const API = {}
const baseURL = process.env.REACT_APP_API_URL || `http://localhost:4000/api/v1`

const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.response.use(
  (response) => {
    const {
      data: { data, error, success },
    } = response
    if (success) {
      return data
    } else {
      return Promise.reject(error)
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

//-------- ENDPOINTS - API -------

API.getPassengerFlights = () => axiosInstance.get(`/passenger/flights`)
API.getAuxData = () => axiosInstance.get(`/baggage/aux`)
API.getFlight = (code) => axiosInstance.get(`flight/validate?code=${code}`)

API.updateBaggageStatus = (payload) =>
  axiosInstance.put(`/baggage/upsert`, payload)

API.upsertPassenger = (payload) =>
  axiosInstance.put(`/passenger/upsert`, payload)

export default API
