
function your_weather(){
    let location = document.getElementById("input-here").value;
   
    const access = async () => {

        const responseloc = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=1d2ff8f43a0360e77507edf6bae62d96`)
        const dataloc = await responseloc.json()
        const geoloclat = dataloc[0]['lat']
        const geoloclon = dataloc[0]['lon']

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geoloclat}&lon=${geoloclon}&appid=1d2ff8f43a0360e77507edf6bae62d96`)
        const data = await response.json()
        
        document.querySelector('.city').innerText ='Weather In' + ' ' + data['city']['name'] + ':'

        let digitemp = data['list'][0]['main']['temp_max']
        let fahrenheitHigh = Math.round(((digitemp - 273.15)*1.8) + 32)
        document.querySelector('.highest-temp').innerText = fahrenheitHigh    

        let digitempl = data['list'][0]['main']['temp_min']
        let fahrenheitlow = Math.round(((digitempl - 273.15)*1.8) + 32)
        document.querySelector('.lowest-temp').innerText = fahrenheitlow
        
        document.querySelector('.coverage').innerText = data['list'][0]['clouds']['all']    

        document.querySelector('.relative-humidity').innerText = data['list'][0]['main']['humidity']

    }
    
    access()
}
