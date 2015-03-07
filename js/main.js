(function() {
    var Dice = {
        init: function() {
            this.spinner = $('#spinner');
            this.die = $('#die');
            this.roll_result = $('#roll_result');
            this.bind_events();
        },
        dice_sides: 6,
        bind_events: function() {
            this.die.on('click', $.proxy(this.roll, this));
       },
        timeOutLength: 500,

        roll: function(event) {

            this.spinner.show();
            var res = Math.floor(Math.random() * this.dice_sides) + 1;

            var self = this;
            setTimeout(function(){

              self.spinner.hide();
              self.roll_result.html(res);

            }, this.timeOutLength);
        },
        pick_sides: function(event){

            this.dice_sides = 8;
        }
    };

    Dice.init();

    $("#dice_list > li").on("click", function() {
        $("#dice_list > li").removeClass("is-active");
        $(this).addClass('is-active');
        var sides = $(this).attr('id');
        var sides_string = sides.substring(1, sides.length);
        Dice.dice_sides = sides_string;
    });

})();

