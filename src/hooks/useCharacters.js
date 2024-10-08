export async function useCharacters(){
    try {
        const response = await fetch("https://dragonball-api.com/api/characters?limit=80");
        const characters = await response.json();
        
        return characters;
    }catch (error){
        console.log(error);
        console.log("HUbo un error")
    }
}