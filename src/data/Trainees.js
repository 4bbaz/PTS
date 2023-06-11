import api from "../service/api";
const getAllTrainees = async () => {
    try {
        const response = await api.get('/trainees');
        const trainees = response.data;
        console.log(trainees);
        return trainees;
    } catch (error) {
        console.error("Failed to fetch trainees:", error);
        throw error;
    }
};

export default getAllTrainees;


export const getTraineeById = async (id) => {
    try {
        const response = await api.get(`/trainee/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch trainee with ID ${id}:`, error);
        throw error;
    }
};

export const getCourseDetailById = async (id) => {
    try {
        const response = await api.get(`/course/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch course details of trainee with ID ${id}:`, error);
        throw error;
    }
};
