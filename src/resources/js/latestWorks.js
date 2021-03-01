(function ($) {

    $.fn.sortImages = function (params) {
        let defaultTypeOfImage = params[0];
        let typeOfImage = params[1];

        let array = this.map(function () {
            return this;
        }).get();

        if (defaultTypeOfImage !== typeOfImage) {
            for (let i = 0; i < array.length; i++) {
                this.eq(i).show();
            }
        }

        for (let i = 0; i < array.length; i++) {
            let outerHTML = array[i].outerHTML.toLowerCase();
            if (typeOfImage === defaultTypeOfImage) {
                this.eq(i).show();
            } else if (!outerHTML.includes(typeOfImage)) {
                this.eq(i).hide();
            }
        }

        return this;
    };

}(jQuery));

$(document).ready(function () {

    $(".all-images").on("click", function () {
        $(".latest-work-image").sortImages(["all-images", this.className]);
    });

    $(".branding").on("click", function () {
        $(".latest-work-image").sortImages(["all-images", this.className]);
    });

    $(".design").on("click", function () {
        $(".latest-work-image").sortImages(["all-images", this.className]);
    });

    $(".development").on("click", function () {
        $(".latest-work-image").sortImages(["all-images", this.className]);
    });

    $(".strategy").on("click", function () {
        $(".latest-work-image").sortImages(["all-images", this.className]);
    });
});