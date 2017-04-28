$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		button.toggleClass("selected");

		if (filter === "all") {
			$(".selected").removeClass("active");
			$(".show").addClass("active");

			// $(".show.active").removeClass("active");

		} else {
			$(".show.active").addClass("active");
			// $("." + filter).addClass("active");

			$(".filter.selected").each(function () {
				var button = $(this);
				var filter = button.data("filter");
				$("." + filter).addClass("active");
			});

			// $(".everything").on("click"function (e) {
			// 	e.preventDefault();
			// 	$(".filter.selected").removeClass("selected");
			// 	$("." + filter).addClass("active");
			// });
		}

	});
});
