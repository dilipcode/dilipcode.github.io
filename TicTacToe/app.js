$(document).ready(function(){
  var result = [];

  $('.box').on('click',function(){
    
    var self = this;      
    var boxIndex=parseInt(this.id);    
    var options = ['x','o'];
    var winningList = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    var preview = options[Math.floor(Math.random()*2)];

    var display = function(){  
    // push the selected click value into result array        
      result[boxIndex-1]=preview;
    }
    
    var winner = function(){
      // looping through winning lines for matching values
      for(var j =0; j < winningList.length; j++){
        var element = winningList[j];      
        for(var i =1; i< element.length; i++){
        
          if (result[element[i]-1] == result[element[0]-1] && result[element[0]-1] == preview && result[element[i+1]-1] == preview){
            alert(preview + ' won');
            $('.box').html("");
            result=[];
            break;
          }          
        }

      }
    }

    var show = function(boxIndex){
                $(self).html(preview);                
                display();
                winner();
              };
    show(boxIndex);
    console.log(result);
  })
  
})