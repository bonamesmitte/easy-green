import axios from 'axios';
import MemberList from '../screens/MemberList';

const Member_API_BASE_URL = 'http://localhost:8080/alice_api/v1/members';

class MemberService {
  getMembers() {
    return axios.get(Member_API_BASE_URL);
  }
  createMember(members) {
    return axios.post(Member_API_BASE_URL, members);
  }

  getMemberById(memberId) {
    return axios.get(Member_API_BASE_URL + '/' + memberId);
  }

  // ex) http://localhost:8080/alice_api/v1/members/3
  updateMember(member, memberId) {
    return axios.put(Member_API_BASE_URL + '/' + memberId, member);
  }

  deleteMember(memberId) {
    return axios.delete(Member_API_BASE_URL + '/' + memberId);
  }
}

export default new MemberService();
