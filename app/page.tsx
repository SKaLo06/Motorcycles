"use client";
import { fetchMotorcycles } from "@/utils";
import {useState,useEffect} from 'react'
import Image from "next/image";
import { Starter, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";

export default function Home() {
  const [allMotorCycles,setAllMotorCycles] = useState<any>([]);
  const [loading,setLoading] = useState(false);

  const [manufacturer,setManufacturer] = useState("");
  const [model,setModel] = useState("");
  const [type,setType] = useState("");
  const [year,setYear] = useState();
  const [limit,setLimit] = useState(10);


  const getMotorcycles = async()=>{
    setLoading(true)
   try {
    const result= await fetchMotorcycles({
      manufacturer: manufacturer || "",
      year: year,
      type: type || "",
      limit: limit || 10,
      model: model || "",
    });
    setAllMotorCycles(result)
   } catch (error) {
    console.log(error)
   } finally{
    setLoading(false);
   }
  }

  useEffect(()=>{
    getMotorcycles();
  },[year,limit,manufacturer,model,type])
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='motorcyclesSection'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Motorcycle Catalogue</h1>
          <p>Explore out motorcycles you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer}
          setModel={setModel}/>

          <div className='home__filter-container'>
            <CustomFilter title='type' options={Starter} 
            setFilter={setType}/>
            <CustomFilter setFilter={setYear} title='year' options={yearsOfProduction} />
          </div>
        </div>

        {allMotorCycles.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allMotorCycles?.map((car:any) => (
                <CarCard motorcycle={car} />
              ))}
            </div>
                {loading && (
                  <div className="mt-16 w-full flex-center">
                    <Image src="/loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain" />
                  </div>
                )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allMotorCycles.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold mb-52'>Oops, no results</h2>
            {/* <p>{allMotorCycles?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}