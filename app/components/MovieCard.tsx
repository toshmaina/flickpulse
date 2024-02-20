
type Props = { 
  data: {
    Title: string;
    Year: string;
    imdbID?: string;
    Type?: string;
    Poster: string;
  }
};


const MovieCard = ({ data: { Title, Year, Poster } }: Props) => {

  
  return (
    
          <div className="flex my-0 mx-auto p-10  flex-1 flex-col w-full max-sm:w-full max-sm:justify-center max-sm:items-center  ">
      < img   src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400' } alt={Title} loading="lazy" className=" transition hover:cursor-pointer  w-[325px] h-[460px]  hover:scale-[1.05] rounded-lg  relative     opacity-100  flex items-center justify-center"/>
    <div className=" mt-0  flex flex-col justify-start gap-2.5">
        
        <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">{Year}</h3>
        <p className="font-semibold mt-2 font-montserrat text-lg text-coral-red leading-normal">      {Title }</p>
      </div>     
      </div>
  )
};

export default MovieCard;
