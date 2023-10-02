<?php

$user_input = $_GET["name"] . ".php";

preg_filter($user_input,  "oops", $subject);
preg_grep($user_input, $array);
preg_match_all($user_input, $subject);
preg_match($user_input, $subject);

preg_replace_callback_array(
  [
      $user_input => function ($match) {
          return "oops";
      },
      '~[b]+~i' => function ($match) {
          return "ok";
      }
  ],
  $subject
);

preg_replace_callback($user_input, function($match) { return "oops"; }, $subject);
preg_replace($user_input, "oops", $subject);
preg_split($user_input, $subject);

mb_ereg_match($user_input, $string);
mb_ereg_replace_callback($user_input, function($match) { return "oops"; }, $string);
mb_ereg_replace($user_input, "oops", $string);
mb_ereg_search_init($string, $user_input);
mb_ereg_search_pos($user_input, "ms");
mb_ereg_search_regs($user_input, "ms");
mb_ereg_search($user_input, "ms");
mb_ereg($user_input, $string);
mb_eregi_replace($user_input, "oops", $string);
mb_eregi($user_input, $string);
mb_split($user_input, $string);
