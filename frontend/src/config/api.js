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
  (error) => Promise.reject(error),
)

//-------- ENDPOINTS - API -------
API.getUsers = () => axiosInstance.get(`/users`)
API.getWorkflowPavilions = (payload) =>
  axiosInstance.post(`/workflow/getPavilions`, payload)

API.getSupplies = (divisionId) =>
  axiosInstance.get(`/admin/getSupplies?divisionId=${divisionId}`)

API.updateOrCreateSupple = (payload) =>
  axiosInstance.put(`/admin/updateOrCreateSupplie`, payload)

API.deleteConsumable = (payload) =>
  axiosInstance.delete(`/admin/deleteConsumable`, { data: payload })

export default API
