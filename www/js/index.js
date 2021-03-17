
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

var divFarmacia = document.getElementById('div-farmacia')
var divCaverna = document.getElementById('div-caverna')
var divCasa = document.getElementById('div-casa')
var divCasino = document.getElementById('div-casino')

var btnFarmacia = document.getElementById('btn-farmacia')
var btnCaverna = document.getElementById('btn-caverna')
var btnCasa = document.getElementById('btn-casa')
var btnCasino = document.getElementById('btn-casino')

var imgFarmacia = document.getElementById('img-farmacia')
var imgCaverna = document.getElementById('img-caverna')
var imgCasa = document.getElementById('img-casa')
var imgCasino = document.getElementById('img-casino')

var hamDivFarm = new Hammer(divFarmacia);
var hamDivCave = new Hammer(divCaverna);
var hamDivHouse = new Hammer(divCasa);
var hamDivCasino = new Hammer(divCasino);

var hamFarm = new Hammer(btnFarmacia);
var hamCave = new Hammer(btnCaverna);
var hamHouse = new Hammer(btnCasa);
var hamCasino = new Hammer(btnCasino);

var hamImgFarm = new Hammer(imgFarmacia);
var hamImgCave = new Hammer(imgCaverna);
var hamImgHouse = new Hammer(imgCasa);
var hamImgCasino = new Hammer(imgCasino);

var gold = 0;
var par = false;

//Objeto con los eventos
var events = {
    onDeviceReady: function(){
        console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    },
    farmacia: function(){
        let oro = acciones.obtenerNumAleatorio(-10, 20);
        acciones.actualizarOro(oro);
        acciones.actualizarLogActividades(`Ganastes ${oro} desde la Farmacia `);
    },
    caverna: function(){
        let oro = acciones.obtenerNumAleatorio(-5, 10);
        acciones.actualizarOro(oro);
        acciones.actualizarLogActividades(`Ganastes ${oro} desde la Caverna `);
    },
    casa: function(){
        let oro = acciones.obtenerNumAleatorio(-2, 5);
        acciones.actualizarOro(oro);
        acciones.actualizarLogActividades(`Ganastes ${oro} desde la Casa `);
    },
    casino: function(){
        let oro = acciones.obtenerNumAleatorio(-0, 50);
        acciones.actualizarOro(oro);
        acciones.actualizarLogActividades(`Ganastes ${oro} desde el Casino `);
    }
}

//Objeto con los métodos
var acciones = {
    obtenerNumAleatorio: function(min, max){
        return Math.round(Math.random() * (max - min) + min);
    },
    actualizarOro: function(oro){
        gold += oro;
        document.getElementById('txt-oro').value = gold;
        if(gold > 1000){
            alert('Ganastes\n Tu oro recolectado es de '+gold);
            gold = 0;           
        }else if((gold < -100)){
            alert(`Perdistes: Debes ${gold} de oro.`);
            gold = 0;
        }
    },
    actualizarLogActividades: function(actividad){
        let fecha = new Date();
        document.getElementById('registro-actividades').innerHTML +=`<p class="${par ? 'dark' : 'light'}">${actividad} (${fecha})</p>`;
        par = !par;
    }
}

document.addEventListener('deviceready', events.onDeviceReady, false);
//Configurando el eventp de hacer Tap sobre el botón (click)
hamFarm.on('tap', events.farmacia)  
hamCave.on('tap', events.caverna)
hamHouse.on('tap', events.casa)
hamCasino.on('tap', events.casino)

//Configurando el eventp de hacer Tap sobre la imágen (click)
hamImgFarm.on('tap', events.farmacia)  
hamImgCave.on('tap', events.caverna)
hamImgHouse.on('tap', events.casa)
hamImgCasino.on('tap', events.casino)

//Configurando los eventos de arrastrar el dedo sobre el div
hamDivFarm.on('pan', events.farmacia)   
hamDivCave.on('pan', events.caverna)
hamDivHouse.on('pan', events.casa)
hamDivCasino.on('pan', events.casino)