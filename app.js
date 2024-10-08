document.addEventListener('DOMContentLoaded', () => {
  const english=document.querySelector('.content-text')
  const spanish=document.querySelector('.traslate')
  const eye=document.querySelector('.eye')
  const next=document.querySelector('.next')

  fetch('./adjetivos.json')
  .then(response => {
    if(!response.ok) throw new Error('no funca el json')
    return response.json(); // Convertir la respuesta a JSON (si es un recurso JSON)
  })
  .then(data => {
      let count=0
      console.log(data.length)
    let update=()=>{
        english.textContent=data[count].english
    }
    let updateTraslate=()=>{
        spanish.textContent=data[count].spanish
    }

    eye.addEventListener('click',()=>{
        console.log('hola')
        console.log(spanish)

        if (spanish.style.visibility === 'visible') {
            spanish.style.visibility = 'hidden';
        } else {
            spanish.style.visibility = 'visible';
        }
        
        updateTraslate()
    })

    next.addEventListener('click',()=>{
if(count===data.length){
alert('todo termino')
location.reload();

}else{
    
           count++
           update()
           updateTraslate() 

}
    })

    update()
    

  })
  .catch(error => {
    // Aquí manejas errores en la petición
    console.error('Hubo un problema con la petición Fetch:', error);
  });

  
    
});
