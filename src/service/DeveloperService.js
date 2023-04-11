import axios from "axios";

const COURSE_API_URL = "http://localhost:8095";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/developer`;

class DeveloperService {
  retrieveAllDevelopers() {
    return axios.get(`${INSTRUCTOR_API_URL}/findAll`);
  }

  retrieveDeveloper(id) {
    //console.log('executed service')
    return axios.get(`${INSTRUCTOR_API_URL}/getDeveloper/${id}`);
  }

  deleteDeveloper(id) {
    //console.log('executed service')
    return axios.get(`${INSTRUCTOR_API_URL}/deleteDeveloper/${id}`);
  }

  updateDeveloper(developer) {
    //console.log('executed service')
    return axios.post(`${INSTRUCTOR_API_URL}/update`, developer);
  }

  createDeveloper(developer) {
    //console.log('executed service')
    return axios.post(`${INSTRUCTOR_API_URL}/insert`, developer);
  }

}

export default new DeveloperService();