"use strict";

$("body").append($("<form>"));

$("form").append($("<label for='titleInput'>Movie Title</label><input type='text' id='titleInput'>"));
$("form").append($("<label for='ratingInput'>Rating</label><input type='number' id='ratingInput' min='0' max='10'>"));
