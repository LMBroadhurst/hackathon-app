import axios from 'axios';

export const getAllOrganisations = async (setOrganisations) => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/organisations/findAll');
        const organisations = response.data;
        setOrganisations(organisations);

        return organisations;
    } catch (e) {
        console.log(e);
    }
}


export const getOrganisationByID = async (ID) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/organisations/findById/${ID}`);
        const organisation = response.data;
        console.log(organisation);

        return organisation;
    } catch (e) {
        console.log(e);
    }
}

export const deleteOrganisationByID = async (ID) => {
    try {
        await axios.delete(`http://127.0.0.1:8080/organisations/deleteOrganisation/${ID}`);
    } catch (e) {
        console.log(e);
    }
}

export const updateOrganisationByID = async (ID, payload) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/organisations/updateOrganisation/${ID}`, payload);
        const organisation = response.data;
        console.log(organisation);

        return organisation;
    } catch (e) {
        console.log(e);
    }
}

export const createOrganisation = async (payload) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/organisations/addOrganisation`, payload);
        const organisation = response.data;
        console.log(organisation);

        return organisation;
    } catch (e) {
        console.log(e);
    }
}