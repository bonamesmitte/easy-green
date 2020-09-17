import axios from 'axios';

const Member_API_BASE_URL = 'http://localhost8080/api/v1/members';

class MemberService {
  getMembers() {
    return axios.get(Member_API_BASE_URL);
  }
}

export default new MemberService();
