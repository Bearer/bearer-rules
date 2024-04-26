<?php

$ok = $_GET['ok'] === 'DESC' ? 'DESC' : 'ASC';
$productId = $_GET['productId'];
// The SQL is prepared with a placeholder
$stmt = $pdo->prepare("SELECT * FROM products WHERE id LIKE ? ORDER BY price {$sortingOrder}");
// The value is provided with LIKE wildcards
$stmt->execute(["%{$productId}%"]);

$ok = mysqli_real_escape_string($conn, $_GET['ok']);
$query  = "SELECT id, name FROM products ORDER BY name LIMIT 20 $ok;";
$result = pg_query($conn, $query);

class Foo {
  public function ok($name) {
    // The SQL is prepared with a placeholder
    $stmt = $pdo->prepare("SELECT * FROM products WHERE name {$placeholderName}");
    // The value is provided with LIKE wildcards
    $stmt->execute(["%{$name}%"]);
  }
}

?>