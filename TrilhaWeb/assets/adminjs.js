COLDIGO = new Object();

$(document).ready(function() {
	
	
	$("header").load("/TrilhaWeb/pages/admin/general/header.html");
	$("footer").load("/TrilhaWeb/pages/admin/general/footer.html");
	
	COLDIGO.carregaPagina = function(pagename){
		$("section").empty();
		$("section").load(pagename+"/", function(response, status, info) {
			if(status == "error") {
				var msg = "Houve um erro ao carregar a página: "+ info.status + " - " + info.statusText;
				$("section").html(msg);
			}
		});
	}
	
});