<?php
    require_once("conn.php");

    $ponto = $_GET["ponto"];
    $nome = $_GET["nome"];

    $sql = "INSERT INTO pontuacao (ponto, nome) VALUES ($ponto, '$nome')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $pdo = null;
?>