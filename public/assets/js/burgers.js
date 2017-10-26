// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newdevoured = $(this).data("newdevoured");
//class=change-devoured is in partials//burger-block.handlebars
    var newdevouredState = {
      devoured: newdevoured
    };

    // Send the PUT request.
    $.ajax("/burgers" + id, {
      type: "PUT",
      data: newdevouredState
    }).then(
      function() {
        console.log("changed devoured state to ", newdevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newBurger").val().trim(),
      devoured: $("[name=devoured]:false").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".update-burger").on("click", function(event) {
  //   var id = $(this).data("id");
  //
  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "POST",
  //   }).then(
  //     function() {
  //       console.log("devoured burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
