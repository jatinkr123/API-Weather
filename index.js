let div = document.querySelector('div')
let form = document.forms[0];
let input = form[0];

async function fetchData(location){
    response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=Y2M2YTVNUWWQ5MKAVL6N23VR6&contentType=json`)
    data = await response.json()

    const { latitude,longitude,resolvedAddress,address,timezone,currentConditions  } = data;
    
        div.innerHTML =`
    <div class="card">        
        <img src="./image/${currentConditions.icon}.png" alt='no pic' id="photu">
        <div class="cardext">
            <span id="temp"><strong class="str">Temp</strong> : ${Math.floor((currentConditions.temp - 32)*5/9)}<sup>o</sup>C</span><br />
            <span id="city"><strong class="str">City</strong> : ${address}</span><br />
            <span id="lalo"><strong class="str">Lat,Long</strong> : ${latitude},${longitude}</span><br />
            <span id="add"><strong class="str">Address</strong> : ${resolvedAddress}</span><br />
            <span id="tz"><strong class="str">TimeZone</strong> : ${timezone}</span><br />
        </div>
    </div>` 
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fetchData(input.value)
})
