angular.module('travelr.weather', [])

.controller('WeatherCtrl', function($scope, WeatherStats) {
  $scope.mockData = [
        {
          "date": {
            "epoch": "1476756000",
            "pretty": "7:00 PM PDT on October 17, 2016",
            "day": 17,
            "month": 10,
            "year": 2016,
            "yday": 290,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "October",
            "monthname_short": "Oct",
            "weekday_short": "Mon",
            "weekday": "Monday",
            "ampm": "PM",
            "tz_short": "PDT",
            "tz_long": "America/Los_Angeles"
          },
          "period": 1,
          "high": {
            "fahrenheit": "69",
            "celsius": "20"
          },
          "low": {
            "fahrenheit": "54",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 10,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": null,
            "mm": null
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": null,
            "cm": null
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 13,
            "kph": 21,
            "dir": "",
            "degrees": 0
          },
          "avewind": {
            "mph": 3,
            "kph": 5,
            "dir": "SSW",
            "degrees": 210
          },
          "avehumidity": 81,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1476842400",
            "pretty": "7:00 PM PDT on October 18, 2016",
            "day": 18,
            "month": 10,
            "year": 2016,
            "yday": 291,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "October",
            "monthname_short": "Oct",
            "weekday_short": "Tue",
            "weekday": "Tuesday",
            "ampm": "PM",
            "tz_short": "PDT",
            "tz_long": "America/Los_Angeles"
          },
          "period": 2,
          "high": {
            "fahrenheit": "66",
            "celsius": "19"
          },
          "low": {
            "fahrenheit": "53",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 10,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "NNW",
            "degrees": 329
          },
          "avewind": {
            "mph": 13,
            "kph": 21,
            "dir": "NNW",
            "degrees": 329
          },
          "avehumidity": 74,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1476928800",
            "pretty": "7:00 PM PDT on October 19, 2016",
            "day": 19,
            "month": 10,
            "year": 2016,
            "yday": 292,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "October",
            "monthname_short": "Oct",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "PDT",
            "tz_long": "America/Los_Angeles"
          },
          "period": 3,
          "high": {
            "fahrenheit": "69",
            "celsius": "21"
          },
          "low": {
            "fahrenheit": "53",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NNW",
            "degrees": 332
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNW",
            "degrees": 332
          },
          "avehumidity": 65,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1477015200",
            "pretty": "7:00 PM PDT on October 20, 2016",
            "day": 20,
            "month": 10,
            "year": 2016,
            "yday": 293,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "October",
            "monthname_short": "Oct",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "PDT",
            "tz_long": "America/Los_Angeles"
          },
          "period": 4,
          "high": {
            "fahrenheit": "71",
            "celsius": "22"
          },
          "low": {
            "fahrenheit": "54",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNW",
            "degrees": 336
          },
          "avewind": {
            "mph": 8,
            "kph": 13,
            "dir": "NNW",
            "degrees": 336
          },
          "avehumidity": 69,
          "maxhumidity": 0,
          "minhumidity": 0
        }
      ];

  // WeatherStats.getWeather()
  // .then(function(forecast) {
  //   $scope.data = forecast;
  // });

  // $scope.updateWeather = function() {
  //   WeatherStats.getWeather()
  //   .then(function(forecast) {
  //     $scope.data = forecast;
  //   });
  // };
});