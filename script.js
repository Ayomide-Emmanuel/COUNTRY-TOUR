let buttn = document.querySelector(".dropbtn");
let dropdown = document.querySelector(".dropdown-content");
let conginentList = document.querySelectorAll(".dropdown-content ul li");
let continent;
let displayHTML = "";

// dropdown
buttn.addEventListener("click", () => {
  dropdown.classList.toggle("show_hidden");
});

const displayResult = (element) => {
const card = document.querySelector(".section");
return card.innerHTML += `
        <div class="card">
              <div class="image">
                  <img src="${element.flags.png}" alt=""></img>
                 
              </div>
              <div class="descript">
                  <h3>${element.name.common}</h3>
                   <p>Population :${element.population} </p>
                   <pRegion : </p>${element.region}
                   <p>Capital : ${element.capital}</p>
                </div>
          </div>`;
    
};

const countriesApi =()=>{
    for (let i = 0; i < conginentList.length; i++) {
        conginentList[i].addEventListener("click", () => {
          const fetchCountries = async () => {
            try {
              if(continent === '') return;
              continent = conginentList[i].textContent;
              const response = await fetch(
                `https://restcountries.com/v3.1/region/${continent}`
              );
              const data = await response.json();
              console.log(data);
              data.forEach((element) => {
                displayResult(element);
              });
            removeEventListener()
            } catch (error) {
              console.log("error", error);
            }
          };
          fetchCountries()
        });
      }
}

countriesApi()

//     const wrap = document.querySelector('.card')
//     let get = document.querySelector('.america')
//        get.addEventListener('click', async ()=>{
// try{
//     const response = await fetch('https://restcountries.com/v3.1/region/america');
//     const data = await response.json();
//     console.log(data)

//     card.innerHTML =`
//     <div class="card">
//           <div class="image">
//               <img src="" alt=""></img>

//           </div>
//           <div class="descript">
//               <h3></h3>
//                <p>Population : </p>
//                <pRegion : Europe</p>
//                <p>Capital : Berlin</p>
//             </div>
//       </div>` ;

// }catch(error){
//     console.log('error',error)
// }
//     });

//     const info = document.querySelector('.card')
//     let process = document.querySelector('.asia')
//        process.addEventListener('click', async ()=>{
// try{
//     const response = await fetch('https://restcountries.com/v3.1/region/asia');
//     const data = await response.json();
//     console.log(data)

//     card.innerHTML =`
//     <div class="card">
//           <div class="image">
//               <img src="" alt=""></img>

//           </div>
//           <div class="descript">
//               <h3></h3>
//                <p>Population : </p>
//                <pRegion : Europe</p>
//                <p>Capital : Berlin</p>
//             </div>
//       </div>` ;

// }catch(error){
//     console.log('error',error)
// }
//     });

//     const work = document.querySelector('.card')
//     let resp = document.querySelector('.europe')
//        resp.addEventListener('click', async ()=>{
// try{
//     const response = await fetch('https://restcountries.com/v3.1/region/europe');
//     const data = await response.json();
//     console.log(data)

//     card.innerHTML =`
//     <div class="card">
//           <div class="image">
//               <img src="" alt=""></img>

//           </div>
//           <div class="descript">
//               <h3></h3>
//                <p>Population : </p>
//                <pRegion : Europe</p>
//                <p>Capital : Berlin</p>
//             </div>
//       </div>` ;

// }catch(error){
//     console.log('error',error)
// }
//     });

//     const doc = document.querySelector('.card')
//     let res = document.querySelector('.oceania')
//        res.addEventListener('click', async ()=>{
// try{
//     const response = await fetch('https://restcountries.com/v3.1/region/oceania');
//     const data = await response.json();
//     console.log(data)

//     card.innerHTML =`
//     <div class="card">
//           <div class="image">
//               <img src="" alt=""></img>

//           </div>
//           <div class="descript">
//               <h3></h3>
//                <p>Population : </p>
//                <pRegion : Europe</p>
//                <p>Capital : Berlin</p>
//             </div>
//       </div>` ;

// }catch(error){
//     console.log('error',error)
// }
//     });
