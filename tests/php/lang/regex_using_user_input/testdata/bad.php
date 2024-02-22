<?php

$user_input = $_GET["name"] . ".php";

# bearer:expected php_lang_regex_using_user_input
preg_filter($user_input,  "oops", $subject);
# bearer:expected php_lang_regex_using_user_input
preg_grep($user_input, $array);
# bearer:expected php_lang_regex_using_user_input
preg_match_all($user_input, $subject);
# bearer:expected php_lang_regex_using_user_input
preg_match($user_input, $subject);

# bearer:expected php_lang_regex_using_user_input
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

# bearer:expected php_lang_regex_using_user_input
preg_replace_callback($user_input, function($match) { return "oops"; }, $subject);
# bearer:expected php_lang_regex_using_user_input
preg_replace($user_input, "oops", $subject);
# bearer:expected php_lang_regex_using_user_input
preg_split($user_input, $subject);

# bearer:expected php_lang_regex_using_user_input
mb_ereg_match($user_input, $string);
# bearer:expected php_lang_regex_using_user_input
mb_ereg_replace_callback($user_input, function($match) { return "oops"; }, $string);
# bearer:expected php_lang_regex_using_user_input
mb_ereg_replace($user_input, "oops", $string);
# bearer:expected php_lang_regex_using_user_input
mb_ereg_search_init($string, $user_input);
# bearer:expected php_lang_regex_using_user_input
mb_ereg_search_pos($user_input, "ms");
# bearer:expected php_lang_regex_using_user_input
mb_ereg_search_regs($user_input, "ms");
# bearer:expected php_lang_regex_using_user_input
mb_ereg_search($user_input, "ms");
# bearer:expected php_lang_regex_using_user_input
mb_ereg($user_input, $string);
# bearer:expected php_lang_regex_using_user_input
mb_eregi_replace($user_input, "oops", $string);
# bearer:expected php_lang_regex_using_user_input
mb_eregi($user_input, $string);
# bearer:expected php_lang_regex_using_user_input
mb_split($user_input, $string);
