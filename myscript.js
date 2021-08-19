


const busca = document.getElementById('busca');
const enviar = document.getElementById('enviar');
const aleatorio = document.getElementById('aleatorio');
const prato = document.getElementById('prato');
const resultado = document.getElementsByClassName('resultado-busca');
const simples = document.getElementById('prato-simples');


function buscarPrato(e){
    e.preventDefault();
    
    
    simples.innerHTML="";
    
    
    
    const term = busca.value;
    
    
    
   if(term.trim){
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
        fetch(url).then(response => response.json())
                .then((data) => {
                resultado.innerHTML = `<h2> Buscando ${term}`;
                if(data.prato === null){
                    resultado.innerHTML = `<h2> Aqui está ${term}`;
                }
                else{
                    simples.innerHTML = data.prato.map((prato) => `
                    <div class="prato">
                    <img src="${prato.strMealThumb}" alt="${prato.strMeal}>"
                    </div>`);
                }
                });
    }
    else{
        
    }
} 




enviar.addEventListener('enviar',buscarPrato);
