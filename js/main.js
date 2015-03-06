(function() {
    var Dice = {
        init: function() {
            this.spinner = $('#spinner');
            this.die = $('#die');
            this.roll_result = $('#roll_result');
            this.bindEvents();
        },
        bindEvents: function() {
            this.die.on('click', $.proxy(this.roll, this));
        },
        timeOutLength: 500,

        roll: function(event) {

            this.spinner.show();
            var res = Math.floor(Math.random() * 6) + 1;
            var self = this;

            setTimeout(function(){

              self.spinner.hide();
              self.roll_result.html(res);

            }, this.timeOutLength);
        }
    }

    Dice.init();

})();