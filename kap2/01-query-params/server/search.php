<?php
header("Content-Type: application/json");

$q = $_GET['q'] ?? '';

$data = [
  ["title" => "JavaScript Grundlagen"],
  ["title" => "AJAX verstehen"],
  ["title" => "PHP & Web"]
];

echo json_encode($data);
