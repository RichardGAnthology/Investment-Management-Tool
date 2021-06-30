import axios from "axios";

const inv_api = "http://localhost:8081/api/investments";
const add_api = "http://localhost:8081/api/addinvestment";
const del_api = "http://localhost:8081/api/deleteinvestment";
const put_api = "http://localhost:8081/api/updateinvestment";

class InvestmentServices {
  getInvestments() {
    return axios.get(inv_api);
  }

  deleteInvestment(investmentId) {
    return axios.delete(del_api + "/" + investmentId);
  }

  postInvestment(currentInvestment) {
    return axios.post(add_api, currentInvestment);
  }

  updateInvestment(investment, investmentId) {
    return axios.put(put_api + "/" + investmentId, investment);
  }

  getInvestmentById(investmentId) {
    return axios.get(inv_api + "/" + investmentId);
  }
}
export default new InvestmentServices();
