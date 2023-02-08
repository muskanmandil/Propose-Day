const popupBtn = document.getElementById("popup-btn");
const popup = document.getElementById("popup");

popupBtn.addEventListener("click", function() {
  popup.style.display = "block";
});

$("#yes-btn").click(function() {
    $.ajax({
      type: "POST",
      url: "/send_email",
      data: { subject: "Reply to your proposal", message: "Yes" }
    });
  });
  