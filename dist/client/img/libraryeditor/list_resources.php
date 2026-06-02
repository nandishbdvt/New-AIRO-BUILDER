<?php
$dir = 'resources/';
$files = array_diff(scandir($dir), array('.', '..'));
echo json_encode(array_values($files));
?>
