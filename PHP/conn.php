<?php
    $host = 'localhost';
    $usuario = 'root';
    $senha = '';
    $banco = 'voltadebeijamin';
    $dsn = "mysql:host={$host};port=3306;dbname={$banco}";
    try {
        $pdo = new PDO($dsn, $usuario, $senha);
    }
    catch (PDOException $e) {
        die($e->getMessage());
    }
?>