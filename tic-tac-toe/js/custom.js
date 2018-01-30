var campo = 9, contXis = 0, contBolinha = 0;

    document.addEventListener("keydown", function(e) {
       // alert(e.keyCode);
        id = '#' + e.srcElement.id;
        if( $(id).val() == '' ) {
            if (e.keyCode == 88 || e.keyCode == 79) {
                $(id).val(e.keyCode == 88 ? 'X' : 'O');
                console.log(e);
                campo--;
            }
            else {
                $(id).val("");
            }
        }


    });
    document.addEventListener("keyup", function(e) {

        for (i = 0; i < 3; i++) {

            //VER LINHA
            if ($("#box_" + i + "_0").val() == $("#box_" + i + "_1").val() && $("#box_" + i + "_1").val() == $("#box_" + i + "_2").val() && $("#box_" + i + "_2").val() == 'X') {
                alert('Xis venceu!');
                endGame();
            }
            if ($("#box_" + i + "_0").val() == $("#box_" + i + "_1").val() && $("#box_" + i + "_1").val() == $("#box_" + i + "_2").val() && $("#box_" + i + "_2").val() == 'O') {
                alert('Bolinha venceu!');
                endGame();
            }

            //VER COLUNA
            if ($("#box_0_"+ i).val() == $("#box_1_"+ i).val() && $("#box_1_"+ i).val() == $("#box_2_"+ i).val() && $("#box_2_"+ i).val() == 'X'){
                alert('Xis venceu!');
                endGame();
            }
            if ($("#box_0_"+ i).val() == $("#box_1_"+ i).val() && $("#box_1_"+ i).val() == $("#box_2_"+ i).val() && $("#box_2_"+ i).val() == 'O') {
                alert('Bolinha venceu!');
                endGame();
            }

            //DIAGONAL PRIMÁRIA
            if ($("#box_0_0").val() == $("#box_1_1").val() && $("#box_2_2").val() == $("#box_1_1").val() && $("#box_1_1").val() == 'X') {
                alert('Xis venceu!');
                endGame();
            }
            if ($("#box_0_0").val() == $("#box_1_1").val() && $("#box_2_2").val() == $("#box_1_1").val() && $("#box_1_1").val() == 'O') {
                alert('Bolinha venceu!');
                endGame();
            }

            // DIAGONAL SECUNDARIA
            if ($("#box_0_2").val() == $("#box_1_1").val() && $("#box_0_2").val() == $("#box_2_0").val() && $("#box_1_1").val() == 'X') {
                alert('Xis venceu!');
                endGame();
            }
            if ($("#box_0_2").val() == $("#box_1_1").val() && $("#box_0_2").val() == $("#box_2_0").val() && $("#box_1_1").val() == 'O') {
                alert('Bolinha venceu!');
                endGame();
            }



            if(campo == 0){
                alert('Empate!');
                campo = 9;
                $("#campo").each(function (){
                    this.reset();
                });
            }
        }
    });

    function endGame() {
        campo = 9;
        $("#campo").each(function () {
            this.reset();
        });
        return true;
    }






