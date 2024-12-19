<?php
// set http header
require '../../core/header.php';
// use needed functions
require '../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../models/level/Level.php';


// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$level = new Level($conn);
$response = new Response();
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);

    $level->level_search = $data['searchValue'];


    http_response_code(200);
    if ($data['isFilter']) {

        $level->level_is_active = checkIndex($data, 'statusFilter');
        if ($level->level_search != '') {
            $query = checkFilterActiveSearch($level);
            getQueriedData($query);
        }
        $query = checkFilterActive($level);
        getQueriedData($query);
    }

    $query = checkSearch($level);
    getQueriedData($query);

    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
