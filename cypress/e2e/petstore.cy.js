import axios from 'axios';

const baseUrl = 'https://petstore.swagger.io/v2';

const getPetById = (petId) => {
  return axios.get(`${baseUrl}/pet/${petId}`);
};

const createPet = (pet) => {
  return axios.post(`${baseUrl}/pet`, pet);
};

const updatePet = (pet) => {
  return axios.put(`${baseUrl}/pet`, pet);
};

const deletePet = (petId) => {
  return axios.delete(`${baseUrl}/pet/${petId}`);
};

describe('Pet Store API', () => {
  let newPetId;

  it('should create a new pet', () => {
    const newPet = {
      id: 1234,
      name: 'Buddy',
      status: 'available',
    };

    createPet(newPet)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.data.id).to.eq(newPet.id);
        expect(response.data.name).to.eq(newPet.name);
        expect(response.data.status).to.eq(newPet.status);
        newPetId = response.data.id;
      })
      .catch((error) => {
        expect(error).to.be.null;
      });
  });

  it('should get a pet by ID', () => {
    getPetById(newPetId)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.data.id).to.eq(newPetId);
      })
      .catch((error) => {
        expect(error).to.be.null;
      });
  });

  it('should update a pet', () => {
    const updatedPet = {
      id: newPetId,
      name: 'Buddy (Updated)',
      status: 'sold',
    };

    updatePet(updatedPet)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.data.id).to.eq(updatedPet.id);
        expect(response.data.name).to.eq(updatedPet.name);
        expect(response.data.status).to.eq(updatedPet.status);
      })
      .catch((error) => {
        expect(error).to.be.null;
      });
  });

  it('should delete a pet', () => {
    deletePet(newPetId)
      .then((response) => {
        expect(response.status).to.eq(200);
      })
      .catch((error) => {
        expect(error).to.be.null;
      });
  });
});
