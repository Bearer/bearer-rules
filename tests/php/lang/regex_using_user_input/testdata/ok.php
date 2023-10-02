<?php

$user_input = $_GET["name"] . ".php";

preg_filter($ok,  $user_input, $user_input);
preg_grep($ok, [$user_input]);
preg_match_all($ok, $user_input);
preg_match($ok, $user_input);

preg_replace_callback_array(
  [
      'asdf' => function ($match) {
          return $user_input;
      },
      '~[b]+~i' => function ($match) {
          return "ok";
      }
  ],
  $user_input
);

preg_replace_callback($ok, function($match) { return $user_input; }, $user_input);
preg_replace($ok, $user_input, $user_input);
preg_split($ok, $user_input);

mb_ereg_match($ok, $user_input);
mb_ereg_replace_callback($ok, function($match) { return $user_input; }, $user_input);
mb_ereg_replace($ok, $user_input, $user_input);
mb_ereg_search_init($user_input, $ok);
mb_ereg_search_pos($ok, $user_input);
mb_ereg_search_regs($ok, $user_input);
mb_ereg_search($ok, $user_input);
mb_ereg($ok, $user_input);
mb_eregi_replace($ok, $user_input, $user_input);
mb_eregi($ok, $user_input);
mb_split($ok, $user_input);
