function enviar(){
    let nomecli = document.getElementById('nome').value;
    let mail = document.getElementById('email').value;
    let tel = document.getElementById('telefone').value;
    let gen = document.getElementById('genero').value;
    let datanas = document.getElementById('data_nascimento').value;
    let marca = document.getElementById('marcadoequipamento').value;
    let cds = document.getElementById('codigodeserie').value;
    let dten = document.getElementById('dataentrega').value;
    let desc = document.getElementById('descricao').value;
    
    document.write("<h3><center><legend>Informações colocadas pelo cliente</h3></center>");
    document.write("<fieldset>");
    document.write("<div class='inputBox'><label for='nome' class='labelInput'>Nome completo: </label><input type='text' name='nome' id='nome' class='inputUser' required value='"+nomecli+"' disabled></div><br>");
    document.write("<div class='inputBox'><label for='nome' class='labelInput'>E-mail: </label><input type='text' name='email' id='email' class='inputUser' required value='"+mail+"' disabled></div><br>");
    document.write("<div class='inputBox'><label for='genero' class='labelInput'>Gênero: </label><input type='gen' name='Gênero' id='genero' class='inputUser' required value='"+gen+"' disabled>");
    document.write("<br><br><br>Ano de nascimento: <br><br><input type='date' name='data_nascimento' id='data_nascimento' required value='"+datanas+"' disabled>");
    document.write("<br><br><h3>Dados do equipamento colocados:</h3>");
    document.write("<br><div class='inputBox'><label for='marcadoequipamento' class='labelInput'>Marca do equipamento: </label><input type='text' name='marcadoequipamento' id='marcadoequipamento' class='inputUser' required value='"+marca+"' disabled></div>");
    document.write("<br><br><div class='inputBox'><label for='codigodeserie' class='labelInput'>Código de série: </label><input type='text' name='codigodeserie' id='codigodeserie' class='inputUser' required value='"+cds+"' disabled></div>");
    document.write("<br><br><div class='inputBox'><label for='data_entrega' class='labelInput'>Data de entrega: </label><input type='date' name='data_entrega' id='dataentrega' class='inputUser' required value='"+dten+"' disabled>");
    document.write("<h4>descrição:</h4> <textarea disabled name='' id='descricao' cols='55' rows='10' class='Userinput'>"+desc+"</textarea><br>");
    document.write("<br><button onclick='window.print()'>Imprimir</button>");
    document.write("</fieldset>");
    document.write("<style>body{font-family: Arial, Helvetica, sans-serif;background-image: linear-gradient(to right, rgb(17, 54, 71), rgb(20, 147, 220)); color: whitesmoke;}.box{color: white;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);background-color: rgba(0, 0, 0, 0.6);padding: 15px;border-radius: 15px;}fieldset{border: 3px solid white;border-radius: 8px;}legend{border: 1px solid dodgerblue;padding: 10px;text-align: center;background-color: dodgerblue;border-radius: 8px;color: white;}.inputBox{position: relative;} 1px solid white;outline: none;color: white;font-size: 15px;width: 100%;}.Userinput{}background-image: linear-gradient(to right, rgba(76, 76, 76, 0.273), rgb(155, 155, 155));color: black;font-family: Arial, Helvetica, sans-serif;}.labelInput{position: absolute;top: 0px;left: 0px;pointer-events: none;  transition: .5s;}.inputUser:focus ~ .labelInput, .inputUser:valid ~ .labelInput{top: -20px;font-size: 12px;color: dodgerblue;}#data_nascimento{border: none;padding: 8px;border-radius: 10px;font-size: 15px;}button{background-image: linear-gradient(to right, rgb(20, 97, 220), rgb(186, 47, 191));width: 100%;border: none;padding: 15px;color: white;font-size: 15px;cursor: pointer;border-radius: 10px;.inputBox{position: relative;}.labelInput{position: absolute;top: 0px;left: 0px;pointer-events: none; transition: .5s;</style>");
    document.write("</legend>");

}