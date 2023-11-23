const postSearchTerm = async (searchTerm: string) => {
    try {
     const response = await fetch(`http://localhost:3000/api/searches/searchdb`, {
         method: "POST", 
         body: JSON.stringify(searchTerm),
         cache: "no-store"
     }
     
     );
        if (!response.ok) throw new Error(`Could not post search term: ${response.statusText}`); 
        console.log(response.statusText);
        const data =  await response.json();
        console.log(data?.result?.rows); 
    } catch (error) {
        error instanceof Error && console.error(error.message);    
   }
}
export default postSearchTerm;