$("#mostrar").click(function(){
	getProductos();
});

function getProductos(){
	$.ajax({
		url: "https://mini-shop-rg.herokuapp.com/products",
		type: "GET",
		success: function(resultado){
			var collectionProductos = resultado;
			var listado = $("#listado");
			for (var i = 0; i< collectionProductos.length; i++){
				var pro = collectionProductos[i];
				listado.append(
					"<div class='asd'>"+
					"<p>"+pro.name+" "+pro.price+" "+pro.stock+"<br>"+pro.description+"<br>"+pro.created_at+"<br>"+pro.updated_at+"<br>"+"<img src="+pro.image+">"+"</p>"
					+"</div>"
					)
			}
		},
		error: function(respuesta){
			alert("fallo");
		}
	});
}
