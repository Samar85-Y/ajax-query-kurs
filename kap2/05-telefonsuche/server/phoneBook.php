<?php
//Prüfe, ob ein Query per Get gesetzt wurde
if (!empty($_GET)) {
    //Prüfe weiter ob der Wert gefüllt ist (kein leerer String)
  if (empty(trim($_GET['v']))) {
    //Ist der Wert leer, Ausgabe einer  
    echo '{[keine Eingabe]}';
    exit;
  } else {
    $val = $_GET['v'];
  }

  $phoneNbrsFile = 'server/phonebook.txt';
  //Öffnen der Telefonbuch Datei
  $fp = fopen($phoneNbrsFile, 'r');
  if (!$fp) {
    //Öffene fehlgleschlagen, Meldung ausgeben un Programm beenden
    echo "{Datei <b>$phoneNbrsFile</b> wurde nicht gefunden!}";
    exit;
  }

  $phoneNbrsArr = array();
  $outputArray = [];
    //Schleife über die Zeilen der Text-Datei
  while (($phoneNbr = fgets($fp)) !== FALSE) {
    // stimmt der Such-String mit dem Anfang der Zeile überein..
    if (preg_match("/^$val/i", $phoneNbr)) {
        // ..... füge diese Zeile zum Treffer-Array hinzu
      $phoneNbrsArr[] = $phoneNbr;
    }
  }
    // konvertiere das Array in einem JSON-String und liefern
    if(empty($phoneNbrsArr)){
        echo "['Keinen Eintrag gefunden']";

    }
    echo json_encode( $phoneNbrsArr );
 
 fclose( $fp );
}
 