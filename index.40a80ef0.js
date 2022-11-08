var e={fetchCountries:function(e){return fetch(`https://restcountries.com/v2/name/${e}?fields=name,capital,currencies`).then((e=>e.json()))}};document.querySelector("#search-box").addEventListener("input",(function(t){const n=t.target.value;e.fetchCountries(n).then((e=>console.log(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.40a80ef0.js.map
