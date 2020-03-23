$(document).ready(function(){
    $("#decimal").hide();

    $("#bin").keydown(function (e) {
        if(event.keyCode == 13) {
            e.preventDefault();
            $("#button").click();
        }
   });

    $("#button").click(function(){
        var num = $("#bin").val();
        var resultFinal=0;
        var erros=0;
        var acertos=0;
        //verificação se o número é binário ou não//
        for(var i = 0;i < num.length;i++){
            var valor = num.substr(i,1);
            console.log(valor);
            if(valor == 1 || valor == 0){
            }else{
                erros +=1;
            }
        }
        if(erros >= 1){ 
            alert("Valor informado é diferente de binário(0,1)");
        }else{
        //resolvendo equação infernal//
        for(var i = 0;i < num.length;i++){
            for(var y = 0;y <= i;y++){
                if(y == 0){
                    resultado = 1;
                }else{
                var resultado = resultado*2;
                }
            }
            //Pega o último número número correspondente não somado 'substr', multiplica ao resultado da equação e soma o final//
            resultFinal = resultFinal + (resultado * num.substr(num.length - (i+1),1));
            console.log("resultado da "+i+"ª exponenciação: "+resultado);
        }
        console.log("Este binário: "+num+"/nPara decimal é "+resultFinal);
        
        $("#decimal").fadeIn(3000);
        $("#decimal").text(resultFinal);
        }

    
    });
});