<?php
$pw = $_GET['q'];
$secNumber = 1;

//Prüfung auf mindestens 8 Zeichen
if(strlen($pw) >= 8){
    $secNumber = strlen($pw) - 8;
}else{
    echo $secNumber;
    exit;
}

//Prüfung auf Kleinbuchstaben
if(preg_match('/[a-z]+/', $pw)){
    $secNumber +=5;
}

//Prüfung auf Großbuchstaben
if(preg_match('/[A-Z]+/', $pw)){
    $secNumber +=5;
}

//Prüfung auf Ziffern
if(preg_match('/[0-9]+/', $pw)){
    $secNumber +=5;
}

//Prüfung auf Sonderzeichen
if(preg_match('/[.,:,-_#!$@]+/', $pw)){
    $secNumber +=5;
}