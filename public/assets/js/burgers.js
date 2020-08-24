$(function() {

  $(".devour").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");
    const addBurger = $(this).data("addBurger");
    let burgerStatus = {
      devoured: addBurger
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerStatus
    }).then(
      function() {
        location.reload();
      }
    );
  });
  
  $(".input-form").on("submit", function (event) {
    event.preventDefault();
    let addBurger = {
      burger_name: $("#burgerName").val()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: addBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });


});