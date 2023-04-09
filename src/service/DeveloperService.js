import axios from "axios";

const COURSE_API_URL = "http://localhost:8095";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/developer`;

class DeveloperService {
  retrieveAllDevelopers() {
    return axios.get(`${INSTRUCTOR_API_URL}/findAll`);
  }

  // retrieveCourse(name, id) {
  //   //console.log('executed service')
  //   return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
  // }

}

export default new DeveloperService();