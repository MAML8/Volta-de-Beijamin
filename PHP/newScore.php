<?php
    require_once("conn.php");

    $ponto = $_POST["ponto"];
    $nome = $_POST["nome"];
    echo "aaa";

    $sql = "INSERT INTO pontuacao (ponto, nome) VALUES ($ponto, '$nome')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $pdo = null;
?>