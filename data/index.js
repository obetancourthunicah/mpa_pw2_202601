import indexPageData from './pages/indexpage';

const getData = (page)=>{
    console.log(`Cargando la data de página ${page}`);
    switch (page){
        case "/index.html":
            return indexPageData;
        case "/contacts.html":
            return {
                "backgroundId":"10",
                "actionMessage": "Contactanos"
            }
        case "/about.html":
            return {
                "backgroundId":"210",
                "actionMessage": "About"
            }
    }
    return {}; //Estructura Json
}

export default getData;