/*Esta funcion permite obtener el valor del select de html(onchange)*/
function getValueType (paellaType){

	this.paellaType = paellaType;
}



function getvalueCoin(currency){
	this.currency = currency.value
}


function getValuePrice (paellaPrice){
	this.paellaPrice = paellaPrice;


}




//var micarrito ={typeProduct:this.paellaType, product:this.paellaProduct};
var product = [];

function buildPaella(){

	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);

	var paellaBase = produceBase();

	console.log(paellaBase);

	if(currency == "peso")
	{
		console.log("Precio total",paellaPrice.value)
		var iva = paellaPrice.value * 0.19
		console.log("Precio sin iva ",paellaPrice.value -iva)
		console.log("iva",iva)
	}
	if(currency == "dolar")
	{

	
		console.log("Valor en dolar",newCalculateDolar(paellaPrice));
	r
		console.log("iva en dolares",calculatePaellaPrice(paellaPrice));

	}

	if(currency == "euro")
	{
		console.log("Valor en euros",newCalculateEuro(paellaPrice));
	
		console.log("iva en euros",calculatePaellaPriceEuro(paellaPrice));
	}

	/*var micarrito = new buildShoppingCar(factory.type,paellaProduct);
	console.log(micarrito);*/
	
	for(var i = 0; i < product.length ; i++){
		

	}
}



//<input type = "text" class = " form-control" placeholder = "peso, dolar, euro" oncahnge = "getvalueCoin(this)">