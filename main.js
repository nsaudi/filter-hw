$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		if (filter === "all") {
			$(".item").addClass("active");
		} else {
			$(".item.active").removeClass("active");
			$("." + filter).addClass("active");
		}
	});
});
