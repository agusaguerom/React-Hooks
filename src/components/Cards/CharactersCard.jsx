export function CharactersCard({name, race, description, image}){
   return(    
    <div class="bg-slate-500 p-5 rounded-xl m-10">
      <div class="flex justify-center items-center">
        <img src={image} alt="foto de {name}" class="h-54 w-52"/>
        <h1 class="font-black text-2xl text-white">{name}</h1>
        <p class="text-blue-200 m-5">{description}</p>

        <div class="mx-9">
          <p class="text-lg font-bold">Raza</p>
          <small class="text-yellow-200 font-medium">{race}</small>
        </div>
      </div>
     
    </div>
 
  )
}