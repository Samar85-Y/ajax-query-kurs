<?php
$errMsg = '';
$query = '';
if ($_GET['q']) {
    if (empty(trim($_GET['q']))) {
        $errMsg = 'Keine Eingabe';
        echo json_encode(["error" => $errMsg]);
        exit;
    } else {
        $query = $_GET['q'];
    }


    $file = 'zuordnung_plz_ort.csv';
    $fp = fopen($file, 'r');

    if (!$fp) {
        $errMsg = "Datei <b>$file</b> wurde nicht gefunden.";
        echo json_encode(["error" => $errMsg]);
        exit;
    }

    $headers = fgetcsv($fp);
    $ort = $headers[1];
    $plz = $headers[2];
    $bl  = $headers[3];

    $plz_array = array();
    $counter = 0;

    while ($row = fgetcsv($fp) !== false) {
        if (preg_match("/^$query/i", $row[1])) {
            $plz_array[$counter++] = array(
                $ort => $row[1],
                $plz => $row[2],
                $bl => $row[3],
            );
        }
    }
    echo json_encode($plz_array);

    fclose($fp);
}
