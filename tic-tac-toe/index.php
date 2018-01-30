<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

    <script src="js/custom.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <style>
        input{
            width: 100px;
            height: 100px;
            border: 2px solid black;
            font-size: 55px;
            text-transform: uppercase;
        }
        h1 {
            margin-top: 15%;
        }
    </style>
</head>
<body>
<form id="campo">
<h1 class="text-center">Tic-Tac-Toe</h1>
<?php

for ($i = 0; $i<3; $i++) { ?>
    <div class="text-center">
        <?php for($y = 0 ; $y<3; $y++) { ?>
            <td> <input type="text" id="box_<?php echo $i . '_' . $y ?>" readonly class="border-dark text-center" maxlength="1"> </td>
        <?php } ?>
    </div>
<?php } ?>
<legend class="text-center">Use X e O</legend>
</form>

</body>
</html>
