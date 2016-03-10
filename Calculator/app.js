$(document).ready(function(){
  $('.key').click(function(){
    var key = this.innerHTML;
    calci.inputHandle(key);

  })
});

var calci = {
  inputHandle: function(input){
    var opcheck = this.preview.slice(-1);
    if(input == "AC"){
      $('.result').empty();
      $('.preview').empty();
      this.preview = "";

    }
    else if(input == "DEL"){
      this.preview = this.preview.slice(0,-1);
      $('.preview').empty();
      $('.preview').append(this.preview);

    }
    else if(input == "="){
      $('.result').empty();
      this.preview = this.preview.replace(/x/g, "*");
      var result = eval(this.preview);
      $('.result').append(result);

    }

    else if(this.operators.indexOf(input) == -1){
      if(opcheck == "-" && input == "-"){

      }else{  
        $('.preview').append(input);
        this.preview = $('.preview').html();
      }
    }
    else{
      // opcheck = this.preview.slice(-1);      
      if(this.operators.indexOf(opcheck) == -1 && opcheck!= ""){
        if(opcheck == "-"){

        }else{
          $('.preview').append(input);
          this.preview = $('.preview').html();
        }
      }
    }

  },
  preview: "",
  operators: ['/','x','+','.']
}