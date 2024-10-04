/*Pseudocodigo
inicio-funcion1
    leer array (de primeras puede ser manual, mas adelante dinamico)
        recorrer array (vueltas definidas)
        inicio-para i<array.length
            crear boton ( data-tag)
            añadir boton al fragment
        create element, data atribute, class-list
        fin-para
        Montar fragment en el dom
fin-funcion1

funcion2
    leer tag 

    leer array fotos
        recorrer array fotos 
            recorrer array tag 

        para array fotos
            recorrer item.tag
                    escribir nuevo array item.tag=tag
            fin-para
        fin-para
    escribir nuevo array
fin-funcion2

inicio-funcion3
    leer array filtrados
        recorrer array 
            para-array filtrados 
                crear div, imagnes, pie de foto... (construir card)
            incluir targeta en el fragment 
            fin-para 
    montar fragment en galeria
fin-funcion3*/






/* VARIABLES */
const fotos=document.querySelector('#foto');
const botonera=document.querySelector('#botonera')

const urlBase='assets';
const fragment=document.createDocumentFragment();

const arrayFotos =[
    {
        id: 1,
        src: `${urlBase}/fotos-viajes/viajes-1.jpg`,
        alt: 'Foto1',
        descripcion: 'Mujer en la playa tumbada en un hamaca',
        tags: ['playa', 'vacaciones', 'mar']
    },
    {
        id: 2,
        src: `${urlBase}/fotos-viajes/viajes-2.jpg`,
        alt: 'Foto2',
        descripcion: 'Pasarela hacia un hotel en el mar',
        tags: ['hotel', 'vacaciones', 'mar']
    },
    {
        id: 3,
        src: `${urlBase}/fotos-viajes/viajes-3.jpg`,
        alt: 'Foto3',
        descripcion: 'Carteles a todas las ciudades',
        tags: ['ciudades', 'vacaciones', 'turismo']
    },
    {
        id: 4,
        src: `${urlBase}/fotos-viajes/viajes-4.jpg`,
        alt: 'Foto4',
        descripcion: 'Adorno Plaza España en Sevilla',
        tags: ['sevilla', 'ciudades', 'turismo']
    },
    {
        id: 5,
        src: `${urlBase}/fotos-viajes/viajes-5.jpg`,
        alt: 'Foto5',
        descripcion: 'Puente Plaza España en Sevilla',
        tags: ['sevilla', 'ciudades', 'turismo']
    },
    {
        id: 6,
        src: `${urlBase}/fotos-viajes/viajes-6.jpg`,
        alt: 'Foto6',
        descripcion: 'Paseo maritimo',
        tags: ['mar', 'playa', 'turismo']
    },
    {
        id: 7,
        src: `${urlBase}/fotos-viajes/viajes-7.jpg`,
        alt: 'Foto7',
        descripcion: 'Castillo antiguo',
        tags: ['castillo', 'turismo']
    },

];

const arrayBotones = []



/* EVENTOS */

document.addEventListener("click",(ev)=>{
    if(ev.target.matches('#botonera button')){
        const tag=ev.target.id
        filtrar(tag)
    }
})

/* FUNCIONES */

//Crear array botones
const crearBotones=()=>{
  arrayFotos.forEach((elemento)=>{
    let obtenidos = elemento.tags;

    obtenidos.forEach((tags)=>{
        if(!arrayBotones.includes(tags)){
            arrayBotones.push(tags);
        }
    })
  })
  return arrayBotones;
}

//Pintar botones
const pintarBotones=()=>{
    arrayBotones.forEach((item)=>{
        botonera.innerHTML+=`<button id="${item}">${item}</button>`
    })
}

//Filtrar en funcion del tag
const filtrar=(tag)=>{
console.log({tag})
   let array= arrayFotos.filter((item)=>  item.tags.includes(tag))
   pintarFotos(array)
}



//Pintar imagenes en el cuerpo de la pagina (ARRAY FOTOS ESTATICO)
const pintarFotos=(array)=>{
 fotos.innerHTML=""

    array.forEach((item)=>{

        const caja=document.createElement('FIGURE')//Construye caja contenedora
    
        const imagen=document.createElement('IMG')//Construye imagen
        imagen.src=item.src;
        imagen.alt=item.alt;
    
        const pie=document.createElement('FIGCAPTION')//Construye pie de foto
        pie.textContent=item.descripcion
    
        const titulo=document.createElement('FIGCAPTION')// construye titulo
        titulo.textContent=item.alt
    
        caja.append(titulo, imagen, pie) //mete titulo, imagen y pie en caja
        fragment.append(caja) //mete caja en fragment
    
    })
    fotos.append(fragment) //monta fragment en el dom a través de fotos
    

}




/* INVOCACIÓNES */
pintarBotones()
crearBotones()




