<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$level = new Level($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$level->level_is_active = 1;
$level->level_title = checkIndex($data, "level_title");
$level->level_created = date("Y-m-d H:i:s");
$level->level_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
// isNameExist($level, $level->level_title);


$query = checkCreate($level);

returnSuccess($level, "level", $query);
