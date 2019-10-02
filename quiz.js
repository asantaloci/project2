$(document).ready(function(){
    /*1*/
    $(".q1opt1").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next1").css("display", "block");
    });
    $(".q1opt2").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next1").css("display", "block");
    });
    $('.next1').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*2*/
   $(".q2opt1").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next2").css("display", "block");
    });
    $(".q2opt2").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next2").css("display", "block");
    });

    $('.next2').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*3*/
   $(".q3opt1").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next3").css("display", "block");
    });
    $(".q3opt2").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next3").css("display", "block");
    });

    $('.next3').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*4*/
   $(".q4opt1").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next4").css("display", "block");
    });
    $(".q4opt2").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next4").css("display", "block");
    });

    $('.next4').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*5*/
   $(".q5opt1").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next5").css("display", "block");
    });
    $(".q5opt2").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next5").css("display", "block");
    });

    $('.next5').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*6*/
   $(".q6opt1").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next6").css("display", "block");
    });
    $(".q6opt2").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next6").css("display", "block");
    });

    $('.next6').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*7*/
   $(".q7opt1").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next7").css("display", "block");
    });
    $(".q7opt2").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next7").css("display", "block");
    });

    $('.next7').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*8*/
   $(".q8opt1").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next8").css("display", "block");
    });
    $(".q8opt2").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next8").css("display", "block");
    });

    $('.next8').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*9*/
   $(".q9opt1").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next9").css("display", "block");
    });
    $(".q9opt2").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next9").css("display", "block");
    });

    $('.next9').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*10*/
   $(".q10opt1").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next10").css("display", "block");
    });
    $(".q10opt2").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next10").css("display", "block");
    });

    $('.next10').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*11*/
   $(".q11opt1").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next11").css("display", "block");
    });
    $(".q11opt2").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next11").css("display", "block");
    });

    $('.next11').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*12*/
   $(".q12opt1").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next12").css("display", "block");
    });
    $(".q12opt2").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next12").css("display", "block");
    });

    $('.next12').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
  /*13*/
   $(".q13opt1").click(function(){
        $(".answer").html("Correct!!");
        $("button").attr("disabled", true);
        $(".next13").css("display", "block");
    });
    $(".q13opt2").click(function(){
        $(".answer").html("Incorrect!!");
        $("button").attr("disabled", true);
        $(".next13").css("display", "block");
    });

    $('.next13').click(function(){
        $(this).parent().hide().next().fadeIn('100');//hide parent and show next
        $("button").attr("disabled", false);
        $(".answer").html("");
    });
});
