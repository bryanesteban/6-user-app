import axios from "axios";

const BASE_URL = '';


export const findAll = async() =>{

    try{
        const response = await axios.get(BASE_URL);
        return response;

    } catch(error){
        console.error(error);
    }

    return undefined;
}

export const save = async ({username, email, password, admin}) => {

    // eslint-disable-next-line no-useless-catch
    try{
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
            admin,
        });
    }catch(error){
        throw error;
    }
}

export const update = async({id, username, email, admin}) => {
    // eslint-disable-next-line no-useless-catch
    try {
        return  await axios.put(`${BASE_URL}/${id}`,{
            username,
            email,
            admin,
        });
    } catch (error) {
        throw error;
    }
}

export const remove = async(id) =>{
    // eslint-disable-next-line no-useless-catch
    try {
        await axios.delete(`${BASE_URL}/${id}`, config());
    } catch (error) {
        throw error;
    }
}