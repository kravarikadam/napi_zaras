$("input").on("input", function(){

    let total = 0;
  
    let inputValue1 = $("#inputValue1").val();
    let inputValue2 = $("#inputValue2").val();
    let inputValue3 = $("#inputValue3").val();
    let inputValue4 = $("#inputValue4").val();
    let inputValue5 = $("#inputValue5").val();
    let inputValue6 = $("#inputValue6").val();
    let inputValue7= $("#inputValue7").val();
    let inputValue8 = $("#inputValue8").val();
    let inputValue9 = $("#inputValue9").val();
    let inputValue10 = $("#inputValue10").val();
    let inputValue11 = $("#inputValue11").val();
    let inputValue12 = $("#inputValue12").val();
  
    let inputNumber1 = isNaN(parseInt(inputValue1)) ? 0 : parseInt(inputValue1);
    let inputNumber2 = isNaN(parseInt(inputValue2)) ? 0 : parseInt(inputValue2);
    let inputNumber3 = isNaN(parseInt(inputValue3)) ? 0 : parseInt(inputValue3);
    let inputNumber4 = isNaN(parseInt(inputValue4)) ? 0 : parseInt(inputValue4);
    let inputNumber5 = isNaN(parseInt(inputValue5)) ? 0 : parseInt(inputValue5);
    let inputNumber6 = isNaN(parseInt(inputValue6)) ? 0 : parseInt(inputValue6);
    let inputNumber7 = isNaN(parseInt(inputValue7)) ? 0 : parseInt(inputValue7);
    let inputNumber8 = isNaN(parseInt(inputValue8)) ? 0 : parseInt(inputValue8);
    let inputNumber9 = isNaN(parseInt(inputValue9)) ? 0 : parseInt(inputValue9);
    let inputNumber10 = isNaN(parseInt(inputValue10)) ? 0 : parseInt(inputValue10);
    let inputNumber11 = isNaN(parseInt(inputValue11)) ? 0 : parseInt(inputValue11);
    let inputNumber12 = isNaN(parseInt(inputValue12)) ? 0 : parseInt(inputValue12);
  
    let ketszazas_ossz = inputNumber2*200;
    $("#inputValue1").val(ketszazas_ossz);
  
    let szazas_ossz = inputNumber4*100;
    $("#inputValue3").val(szazas_ossz);
  
    let otvenes_ossz = inputNumber6*50;
    $("#inputValue5").val(otvenes_ossz);
  
    let huszas_ossz = inputNumber8*20;
    $("#inputValue7").val(huszas_ossz);
  
    let tizes_ossz = inputNumber10*10;
    $("#inputValue9").val(tizes_ossz);
  
    let otos_ossz = inputNumber12*5;
    $("#inputValue11").val(otos_ossz);
  
    let inputValue14 = $("#inputValue14").val();
    let inputNumber14 = isNaN(parseInt(inputValue14)) ? 0 : parseInt(inputValue14);
   
    let apro_ossz = ketszazas_ossz + szazas_ossz + otvenes_ossz +huszas_ossz + tizes_ossz + otos_ossz;
    total= apro_ossz;
  
    $("#inputValue13").val(total);  
  
    if(inputValue14)
    {
      total= parseInt(total) + parseInt(inputValue14);
      $("#inputValue15").val(total);
    }
  
    let inputValue16 = $("#inputValue16").val();
    let inputNumber16 = isNaN(parseInt(inputValue16)) ? 0 : parseInt(inputValue16);
    
    if(inputNumber16)
    {
      let napi_ossz_bevetel = total-inputNumber16;
      $("#inputValue17").val(napi_ossz_bevetel);
    }
    
    let masnapi_nyito = apro_ossz + 20000;
    $("#inputValue18").val(masnapi_nyito);
  
  });
  
  const ev = new Date().getFullYear();
  const honap = new Date().getMonth() +1;
  const nap = new Date().getDate();
  const ora = new Date().getHours();
  const perc = new Date().getMinutes();
  const masodperc = new Date().getSeconds();
  
  $(".ido").html(`${ev}.${honap}.${nap} ${ora}:${perc}:${masodperc}`);
  