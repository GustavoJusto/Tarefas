// This is a JavaScript file // 

$(document).on("click", "#calcular", function()
{
        var valor1 = $("#valor1").val();
        var valor2 = $("#valor2").val();
        var resposta = parseFloat(valor1)+parseFloat(valor2);

        $("#res").val(resposta);
});