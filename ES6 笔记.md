# ES6


COMMONJS

	export.name = "123";
	// or 
	module.export = {
		name:"123"
	}
	// or
	module.export = function(){}

AMD

	define(['./a.js','./b.js'],function(a,b){
		
		a.doSomething();
		b.doSomething();

		var exports = {};
		exports.method = function(){};
		return exports;	
	})


CMD

	define(function(require,exports,module){
		
		var a = require("./a");
		a.doSomething();
		var b = require("./b");
		b.doSomething();

		exports.action = function(){};
	})

ES6 Module
	

	export 命令 和 import 命令

		export var name = 'mei';

		import {firstName, lastName, year} from './profile'
		console.log(firstName, lastName, year)

	模块整体输出

		profile.js:

		var name = "123";
		var age = "13";

		export {name,age};

		use:

		import * as Profile from './profile'
		console.log(Profile.firstName, Profile.lastName, Profile.year)


Promise  

状态  pending,fulfiled,rejected,  

	var promise = new Promise(function(resolve,reject){
	//参数一执行，会改变成功状态，参数二执行，失败状态
		
		console.log("in");
		if(..){
			 reslove();
			 console.log("词句不会执行");
		}else{
			reject();
		}
	})

	promise.then(function(value){
		console.log("xx");

	},function(value){
		
	})

	console.log("hi");

	执行结果:
	in,hi,xx


Async

	async function aa(){};
	const fo = async function(){};
	let obj = {async foo(){}}
	obj.foo().then(...);

	asyncReadFile

	aysnc funciton getUser(){
		let a = await getA();
		let b = await getB();
		return xx;
	}

	getUser.then(function(result){
		console.log(result);
	},function(value){

	})

Deferred(Jquery)

（待续...）