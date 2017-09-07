require('../css/index.css');

var a = require('./A');
var b = require('./B');

window.$ = require('jquery');

var _text = true;
var aBt ="<button id='ccBt'> click </button>"
$("#webapp").html(aBt);


$("#ccBt").on("click",function(){	
	console.log(_text);
	if(_text){
	 	a.getA();
	 	_text = false;
	}else{
		b.getB();
		_text = true;
	}
})
