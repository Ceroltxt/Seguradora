function calcularSeguro(){
    let idade = parseInt (document.getElementById('idade').value)
    let estadocivil = document.getElementById ('estadocivil').value

    let motoristasAdicionais= parseInt(document.getElementById('motoristasAdicionais').value)

    let classeVeiculo = document.getElementById('classeVeiculo').value

    let valorbase;

    if (idade>=18 && idade<=27){
        valorbase =300;
    }else if (idade>=28 && idade<=50){
        valorbase=100;
    }else{
        valorbase =200;
    }
  

    if (estadocivil ==="solteiro"){
        valorbase+=60;
    }
    if(motoristasAdicionais>0){
        valorbase+=(valorbase*0.1*motoristasAdicionais)
    }
    
    let fatorPericulosidade;
        if (classeVeiculo ==="A"){
            fatorPericulosidade = 0.1;
        }else if (classeVeiculo==='B'){
            fatorPericulosidade = 0.2;
        }else{
            fatorPericulosidade =0.3;
        }
    
        let valorSeguro = valorbase + (valorbase*fatorPericulosidade);
        

        document.getElementById('resultado').innerText = `O valor do seguro para ${document.getElementById('nome').value} é R$ ${valorSeguro.toFixed(2)}`;


}