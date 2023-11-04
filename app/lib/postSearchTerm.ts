const postSearchTerm = async (searchTerm: string) => {
     
    try {
     const response = await fetch(`http://localhost:3000/api/searches`, {
         method: "POST", 
         body: JSON.stringify(searchTerm)
    });
        if (!response.ok) throw new Error("Could not post search");  
        const data =  await response.json();
        console.log(data);   
    } catch (error) {
        error instanceof Error && console.error(error.message);
        
        
   }
}
export default postSearchTerm;