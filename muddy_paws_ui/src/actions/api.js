import axios from "axios";

const base_url = "https://localhost:44346/api/";

export default {
  pets(url = `${base_url}MuddyPawsPets/`) {
    return {
      getAll: () => axios.get(url),
      fetchById: id => axios.get(`${url}id`),
      create: newPet => axios.post(`${url}`, newPet),
      update: (id, updatedPet) => axios.put(`${url}id`, updatedPet),
      delete: id => axios.delete(`${url}id`)
    };
  }
};
