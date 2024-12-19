<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$level = new Level($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("levelid", $_GET)) {
  $level->level_aid = $_GET['levelid'];
  checkId($level->level_aid);
  $query = checkReadById($level);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($level);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();