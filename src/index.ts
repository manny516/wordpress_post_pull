//DOM Objects Selectors 
const fromField = document.querySelector("#form input") as HTMLInputElement;
const clickButton = document.querySelector("#click-btn");
const gridContainer = document.querySelector("#grid-container");
const wpApi = "https://www.mannyidea.com/creativo/wp-json/wp/v2/posts";


interface WordPress{
    id: number,
    excerpt : {
        rendered : string 
    },
    link : string,
    title : {
        rendered : string
    }
} 

const consoleIt = (param:WordPress[]) =>{

    if(gridContainer){
        gridContainer.innerHTML  = "";
    }
    
    param.length > 0 && param.map((param:WordPress) =>{
       const {excerpt,link,title}:WordPress = param;
        const outputData = `
            <div class="post-box w-10/1 rounded-3xl border border-solid mt-4">
                    <div class="content-cotainer p-10">
                        <h3>${title.rendered}</h3>
                        <p class="mb-10">${excerpt.rendered.substring(0,100)}</p>
                        <a class="border border-solid view-link p-4 text-emerald-600" href="${link}"> View content</a>
                    </div>
                </div>
        `;

        if(gridContainer){
            gridContainer.innerHTML += outputData;
        }
    });
    console.log(param.length);
}

 const apiHandler = () =>{
    if(fromField){
        const inputData = fromField.value
        return inputData;
    }
}


clickButton && clickButton.addEventListener("click", () =>{

    const apiHandler = () =>{
    const inputData = fromField.value
    return inputData;
}
   
    (async(returnFunc,endpoint)=>{

    try{
        const fetchApiCall = async(endpoint:string)=>{
        const apiCall = await fetch(endpoint);
        const response = await apiCall.json();
        const reponseData = response;
        return reponseData
        }

        return returnFunc(await fetchApiCall(endpoint));

    }catch(err){
        console.error(err);
    }

    console.log(endpoint);


})(consoleIt,apiHandler());
})