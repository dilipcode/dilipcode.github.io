$(document).ready(function(){
  var game = {
    init: function(domElement){
      this.domElement=domElement;
      $(this.domElement).css('left','20px');
      $(this.domElement).css('top','20px');


    },
    right: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(360deg)');
      this.setIntervalId= setInterval(frame,10);
      var pos = parseInt($(this.domElement).css('left'));
      var domElement = this.domElement;
      // console.log(this);      
      // console.log($(this.domElement).css('left'));
      function frame(){
        pos++;
        console.log(this);
        $(domElement).css('left',pos + 'px');
      }

    },
    
    down: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(90deg)');
      this.setIntervalId= setInterval(frame,10);      
      var pos = parseInt($(this.domElement).css('top'));
      var domElement = this.domElement;
      
      function frame(){
        pos++;
        console.log(this);
        $(domElement).css('top',pos + 'px');
      }


    },
    left: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(360deg)');
      this.setIntervalId= setInterval(frame,10);      
      var pos = parseInt($(this.domElement).css('left'));
      var domElement = this.domElement;
      console.log(this);
      function frame(){
        pos--;
        console.log(this);
        $(domElement).css('left',pos + 'px');
      }

    },
    up: function(){
      this.stop();
      $(this.domElement).css('transform','rotateZ(90deg)');
      this.setIntervalId= setInterval(frame,10);
      var pos = parseInt($(this.domElement).css('top'));

      var domElement = this.domElement;
      console.log(this);
      function frame(){
        pos--;
        console.log(this);
        $(domElement).css('top',pos + 'px');
      }


    },
    stop: function(){
      if (this.setIntervalId){
      clearInterval(this.setIntervalId);
      }

    }
  };

var car = $('#car');
game.init(car);
$('#right').click(function(){
  
  game.right();
});
$('#stop').click(function(){
  game.stop();
});
$('#down').click(function(){
  game.down();
});
$('#left').click(function(){
  game.left();
});
$('#up').click(function(){
  game.up();
});

});


