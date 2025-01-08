<?php
    require_once("conn.php");
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        if(!(isset($_POST["ponto"]) && isset($_POST["nome"])))
            exit(-1);
        $ponto = $_POST["ponto"];
        $nome = $_POST["nome"];

        $sql = "INSERT INTO voltadebeijamin (ponto, nome) VALUES ($ponto, '$nome')";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET'){
        $sql = "SELECT * FROM voltadebeijamin ORDER BY ponto DESC LIMIT 10";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        sleep(1);

        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
    $pdo = null;
?>