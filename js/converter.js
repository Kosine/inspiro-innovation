(function() {
  var conversions = {
    "degree" : {
        "fahrenheit" : 33.8
    },
    "fahrenheit" : {
        "degree" : 1
    },
    "metre" : {
        "cm" : 100
    },
    "cm" : {
        "metre" : 0.01
    }

  }

  $("#converter").on("submit", function(e){
    e.preventDefault();

    var from_unit = $(".from").val();
    var to_unit = $(".to").val();

    var input = $("input[name = 'value']").val() || 0;

    if(input){
      var results = conversions[from_unit][to_unit] * input;
      $("input[name = 'output']").val(results);
      return;
    } else {
      return;
    }
  });

})()
