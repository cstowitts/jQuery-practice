"use strict";

/** creates form element and appends to DOM */
$("body").append($("<form>"));

/** creates input elements and button, and appends to form (and DOM)*/
$("form").append($("<label for='titleInput'>Movie Title (must be at least 2 characters)</label><input type='text' id='titleInput' minlength='2'>"));
$("form").append($("<label for='ratingInput'>Rating (0-10)</label><input type='number' id='ratingInput' min='0' max='10'>"));
$("form").append($("<button id='submit-btn'>Submit Movie Rating</button>"));

/** creates ratings container and appends to DOM */
$("body").append($("<div id='ratings-container'></div>"));

/** this function creates a new movie rating entry, appends to ratings container */
function addRatingEntry (event){
    event.preventDefault();
    let $entryContainer = $("<div class='entry-container'></div");
    $entryContainer.append($("#titleInput").val());
    $entryContainer.append($("#ratingInput").val());
    $entryContainer.append($("<button class='del-btn'>Delete Rating</button>"));

    $("#ratings-container").append($entryContainer);
}

/** adds event listener to submit button
 * when clicked, calls addRatingEntry and creates new movie rating entry
 * appends to DOM
 */
$("#submit-btn").on("click", addRatingEntry);

/** removes a rating entry */
function removeRatingEntry(event){
    $(event.target).parent().remove();
}

/** applies event listener to the ratings container, deletes entry when delete button is clicked  */
$("#ratings-container").on("click", ".del-btn", removeRatingEntry);