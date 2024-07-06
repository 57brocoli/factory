import { useEffect, useState } from "react";


////////////////////////////////////////////Chemin d'acces aux images///////////////////////////////////////
export const source = {
    uri: 'https://pixelfull.pixelevent.site/uploads/page/',
};

//////////////////////////////////////// Fonction pour avoir les dimension de l'ecran ////////////////////////////////
export function useDimention() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension(){
      return {
            width: window.innerWidth,
            height: window.innerHeight
      }
    }
    useEffect(() => {
          const updateDimension = () => {
                setScreenSize(getCurrentDimension())
          }
          window.addEventListener('resize', updateDimension);
          return(() => {
              window.removeEventListener('resize', updateDimension);
          })
    }, [screenSize])

    return screenSize
}