
function your_weather(){
    let location = document.getElementById("input-here").value;
    console.log(location)


    
    const access = async () => {



        const responseloc = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=1d2ff8f43a0360e77507edf6bae62d96`)
        const dataloc = await responseloc.json()
        console.log(dataloc)
        const geoloclat = dataloc[0]['lat']
        const geoloclon = dataloc[0]['lon']
        console.log(geoloclat)
        console.log(geoloclon)

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geoloclat}&lon=${geoloclon}&appid=1d2ff8f43a0360e77507edf6bae62d96`)
        const data = await response.json()
        console.log(data)
        
        const name = document.createElement('h1')
        name.innerText = data['city']['name']
        const city = document.querySelector('.city')
        city.append(name)

        let digitemp = data['list'][0]['main']['temp_max']
        console.log(digitemp)
        let fahrenheitHigh = ((digitemp - 273.15)*1.8) + 32
        console.log(fahrenheitHigh)
        const high = document.createElement('h4')
        high.innerText = fahrenheitHigh
        console.log(high)
        const highest_temp = document.querySelector('.highest-temp')
        highest_temp.append(high)

        let digitempl = data['list'][0]['main']['temp_min']
        console.log(digitempl)
        let fahrenheitlow = ((digitempl - 273.15)*1.8) + 32
        console.log(fahrenheitlow)
        const low = document.createElement('h4')
        low.innerText = fahrenheitlow
        console.log(low)
        const lowest_temp = document.querySelector('.lowest-temp')
        lowest_temp.append(low)

        const clouds = document.createElement('h4')
        clouds.innerText = data['list'][0]['clouds']['all']
        const coverage = document.querySelector('.coverage')
        coverage.append(clouds)

        const relative_humidity = document.createElement('h4')
        relative_humidity.innerText = data['list'][0]['main']['humidity']
        const humidity = document.querySelector('.relative-humidity')
        humidity.append(relative_humidity)
    }
    

    access()
}
