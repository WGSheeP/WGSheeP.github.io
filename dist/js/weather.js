
//根据获取到的地址通过知心天气提供的API获取相关的天气信息；
var weatherData = {
	location: {},
	last_update: "",
	now: {},
	daily: []
};

var n = 0;

var currentCity = '北京';

var miniInfo = document.querySelector('#miniInfo');

var miniCity = document.querySelector('#miniCity');
var miniImage = document.querySelector('#miniImage');
var miniTemperature = document.querySelector('#miniTemperature');

var weatherPanel = document.querySelector('#weatherPanel');

var detailCity = document.querySelector('#detailCity');
var detailImage = document.querySelector('#detailImage');
var detailTemperature = document.querySelector('#detailTemperature');
var detailText = document.querySelector('#detailText');
var moreInfo = document.querySelector('#moreInfo');

miniInfo.onmouseenter = function() {
	weatherPanel.style.display = 'block';
}
miniInfo.onmouseleave = function() {
	weatherPanel.style.display = 'none';
}

getData();

function showWeather(data) {
	if(data.results.length) {

		n++;

		if(data.results[0].location) {
			weatherData.location = data.results[0].location;
		}

		if(data.results[0].now) {
			weatherData.now = data.results[0].now;
		}

		if(n == 2) {
			renderWeather();
			n = 0;
		}

	}
}

function showDaily(data) {
	if(data.results.length && data.results[0].daily) {
		n++;
		weatherData.daily = data.results[0].daily;

		if(n == 2) {
			renderWeather();
			n = 0;
		}
	}
}

function getData() {
	var script1 = document.createElement('script');
	script1.src = 'https://api.thinkpage.cn/v3/weather/now.json?location=beijing&ts=1487676258&ttl=360000&uid=U2192B8D31&sig=3%2F4PzmJR4YblUlcKbBOj8NqB3KY%3D&callback=showWeather&location=' + currentCity;

	var script2 = document.createElement('script');
	script2.src = 'https://api.thinkpage.cn/v3/weather/daily.json?location=beijing&ts=1487676258&ttl=360000&uid=U2192B8D31&sig=3%2F4PzmJR4YblUlcKbBOj8NqB3KY%3D&callback=showDaily&start=0&days=3&location=' + currentCity;

	document.body.appendChild(script1);
	document.body.appendChild(script2);
}

function renderWeather() {
	//
	miniCity.innerHTML = weatherData.location.name;
	miniImage.src = 'images/3d_60/' + weatherData.now.code + '.png';
	miniTemperature.innerHTML = weatherData.now.temperature + '°';

	//

	detailCity.innerHTML = weatherData.location.name;
	detailImage.src = 'images/3d_180/' + weatherData.now.code + '.png';
	detailTemperature.innerHTML = weatherData.now.temperature + '°';
	detailText.innerHTML = weatherData.now.text;

	//
	var html = '';
	var dayArr = '今天,明天,后天'.split(',');
	weatherData.daily.forEach(function(value, index) {
		html += `<li>
                        <p>${dayArr[index]}</p>
                        <p>
                            <img src="images/3d_60/${value.code_day}.png" alt="">
                        </p>
                        <p>${value.text_day} / ${value.text_night}</p>
                        <p>${value.low}°/${value.high}°</p>
                    </li>`;
	});
	moreInfo.innerHTML = html;
}