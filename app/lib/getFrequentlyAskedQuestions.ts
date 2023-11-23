import { API_BASE_URL } from "../constants";
export const getFrequentlyAskedQuestions = async () => {
    try {
        const response: Response  = await fetch(`${API_BASE_URL}/questions`,{next:{revalidate : 30 }});
        if (!response.ok) throw new Error("Could not get the most recently asked questions ");
        const data = response.json();
        console.log(data);    
        return data;
    } catch (error) {
        error instanceof Error && console.log(error.message);
    }
};