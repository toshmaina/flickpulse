
type Props = { 
  data: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
};


const MovieCard = ({data}:Props) => {
  return (
    
          <div className=" relative flex flex-col items-center justify-center    ">
      < img width={400} height={400}  src={data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/400' } alt={data.Title} loading="lazy" className=" rounded-lg  w-[280px] h-[280px] relative     opacity-100  flex items-center justify-center"/>
    <div className=" absolute   mt-8 flex flex-col justify-start gap-2.5">
       
        <p className="font-montserrat text-xl leading-normal text-white  ">{(3)}</p>
        <h3 className="mt-2 text-2xl font-semibold leading-normal text-white  font-palanquin ">{data.Year}</h3>
        <p className="font-semibold mt-2 font-montserrat text-2xl text-white  leading-normal">{data.Title}</p>
      </div>     
      </div>
  )
};

export default MovieCard;
