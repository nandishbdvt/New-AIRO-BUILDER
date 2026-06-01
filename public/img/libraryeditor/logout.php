<?php
session_start();
session_unset();
session_destroy();
header("Location: https://jnnce.ac.in/login.php"); // Adjust if your login file is elsewhere
exit();
?>
