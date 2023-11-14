<?php
    require_once("conn.php");

    $sql = "SELECT * FROM pontuacao ORDER BY ponto DESC LIMIT 10";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    sleep(1);
    /*
    $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($dados as $row=>$r){
        echo $r['nome'].": ".$r["pontuacao"]."\n";
    }
    */

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    
    $pdo = null;
?>