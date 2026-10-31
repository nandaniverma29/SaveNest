<?php
// CORS headers allow karne ke liye
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json");

$file = 'mode.txt';
$action = $_GET['action'] ?? '';

if ($action === 'set') {
    $mode = $_GET['mode'] ?? 'coupon';
    file_put_contents($file, $mode);
    echo json_encode(['status' => 'success', 'mode' => $mode]);
} else {
    // Default mode "coupon" rahega
    $currentMode = file_exists($file) ? trim(file_get_contents($file)) : 'coupon';
    echo json_encode(['status' => 'success', 'mode' => $currentMode]);
}
?>