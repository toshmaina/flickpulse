export const getFrequentlyAskedQuestions = async () => {
    try {
        const response: Response = await fetch( "http://localhost:3000/api/question", {
            next: { revalidate: 30 },
            headers: {
                "Accept": "application/json"
            }
    
        });
        if (!response.ok) throw new Error("Could not get the most recently asked questions ");
        const data:Array<FAQs>  =  await response.json();
    console.log(data);
        return data;
    } catch (error) {
        error instanceof Error && console.log(error.message);
    }
};