(function() {
    var Dice = {
        init: function() {
            // this.dice_list = $('#dice_list > li');
            this.spinner = $('#spinner');
            this.die = $('#die');
            this.roll_result = $('#roll_result');
            this.bind_events();
        },
        dice_sides: 6,
        bind_events: function() {
            this.die.on('click', $.proxy(this.roll, this));
            // this.dice_list.on('click', $.proxy(this.pick_sides, this));
       },
        timeOutLength: 500,

        roll: function(event) {

            this.spinner.show();
            var res = Math.floor(Math.random() * this.dice_sides) + 1;

            var self = this;
            setTimeout(function(){

              self.spinner.hide();
              self.roll_result.attr('class', 'die');
              self.roll_result.addClass('d' + self.dice_sides + '-' + res);

            }, this.timeOutLength);
        },
        pick_sides: function(event){
            // $("#dice_list > li").removeClass("is-active");
            // this.dice_list.addClass('is-active');
            // var sides = this.dice_list.attr('id');
            // var sides_string = sides.substring(1, sides.length);
            // this.dice_sides = sides_string;
        }
    };

    Dice.init();

    $("#dice_list > li").on("click", function() {
        $("#dice_list > li").removeClass("is-active");
        $(this).addClass('is-active');
        var sides = $(this).attr('id');
        var sides_string = sides.substring(1, sides.length);
        Dice.dice_sides = sides_string;
        Dice.roll();
    });

})();

