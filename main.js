$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		button.toggleClass("selected");

		if (filter === "all") {
			$(".filter.selected").removeClass("selected");
			$(".show").addClass("active");
			$(".filter.everything").addClass("selected");
			// $(".show.active").removeClass("active");

		} else {
			$(".show.active").removeClass("active");
			$(".filter.everything").removeClass("selected");
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
