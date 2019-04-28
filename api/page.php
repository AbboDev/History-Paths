<?php

/**
 *
 */

$title = json_decode(file_get_contents('http://www.randomtext.me/api/lorem/h1/1-7'));
$subtitle = json_decode(file_get_contents('http://www.randomtext.me/api/lorem/h2/5-10'));
$content = json_decode(file_get_contents('http://www.randomtext.me/api/'));

$data = array(
  'title' => strip_tags($title->text_out),
  'subtitle' => strip_tags($subtitle->text_out),
  'content' => array_filter(explode("<br />", str_replace(array("\n", "\t", "\r"), '', nl2br(strip_tags($content->text_out))))),
);

header('Content-Type: application/json');
echo json_encode($data);
