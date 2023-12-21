let surhasContainer = document.querySelector('.surhasContainer')

getSuhars()

function getSuhars (){
    fetch ("http://api.alquran.cloud/v1/meta")
    .then (Response => Response.json())
    .then (data => {
        let surahs = data.data.surahs.references;
        let numberofSuhars = 114;
        surhasContainer.innerHTML = "";
        for (let i = 0; i < numberofSuhars; i++) {
            surhasContainer.innerHTML += 
            `
            <div class="surah">
            <p>${surahs[i].name} </p>
            <p>${surahs[i].englishName}</p>
        </div>
            `
            
        }

    })
  

}