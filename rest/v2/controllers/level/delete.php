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
  // get data
  $level->level_aid = $_GET['levelid'];
  checkId($level->level_aid);
  

  $query = checkDelete($level);

  returnSuccess($level, "level", $query);
}

// return 404 error if endpoint not available
checkEndpoint();