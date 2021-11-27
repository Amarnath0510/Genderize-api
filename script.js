 document.body.innerHTML=`<section class="gender-container"></section>`;
 async function getAllGenders(){
    

 const gender= await data.json();
 const genderContainer=document.querySelector(".gender-container");
 async function getAllGenders(){
    
      const data = await fetch (
          "https://genderize.io",
      {
          method:"GET",
     headers:{"Content-type":"application/json"},
      body:JSON.stringify({limiting:rateLimiting})
      })
       const rateLimiting= await data.json();
          const rateLimiting= await data.json();
      const rateLimiting= await data.json();
       const genderContainer=document.querySelector(".gender-container");
       genderContainer.innerHTML="";
   genders.forEach(gender=>{
       genderContainer.innerHTML+=`
      <div class="gender-container">
      <p>${gender.limitings}</p>
      </div>
       `;

   }); 
   console.log(gender); 
}}
 getAllGenders();
