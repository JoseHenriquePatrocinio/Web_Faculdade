function validaInscricao() {
	var nome = document.frmincricao.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	if (!expRegNome.test(nome)) {
		alert("Preencha o campo nome corretamente.");
		document.frmincricao.txtnome.focus();
		return false;
	}
	var fone = document.frmincricao.txtfome.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	if (!expRegFone.test(fone)) {
		alert("Preencha o campo telefone corretamente.");
		document.frmincricao.txtfome.focus();
		return false;
	}

	var cpf = document.frmincricao.txtcpf.value;
	var expRegCpf = new RegExp("^[0-9]{3}[.]{1}[0-9]{3}[.]{1}[0-9]{3}[-]{1}[0-9]{2}$");
	if (!expRegCpf.test(cpf)) {
		alert("Preencha o campo CPF corretamente.");
		document.frmincricao.txtcpf.focus();
		return false;
	}
	var data = document.frmincricao.txtdata.value;
	var expRegData = new RegExp("^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$");
	if (!expRegData.test(data)) {
		alert("Preencha o campo data corretamente.");
		document.frmincricao.txtdata.focus();
		return false;
	}


	if (document.frmincricao.txtemail.value == "") {
		alert("Preencha o campo email");
		document.frmincricao.txtemail.focus();
		return false;
	} else if (document.frmincricao.radiosexo.value == "") {
		alert("Preencha o campo gênero");
		return false;
	} else if (document.frmincricao.selopcao.value == "") {
		alert("Selecione se deseja se tornar VIP");
		return false;
	}
	alert("FORZA CLUB agradece sua inscrição");
	return true;
}

$(document).ready(function() {
	$("nav").load("/pages/general/menu.html");
	$("footer").load("/pages/general/rodape.html");
});
