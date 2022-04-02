//======================================================//
//                      VARIABLES                       //
//======================================================//
var COUNT_1 = [0, 0, 0];
var COUNT_2 = [0, 0, 0, 0, 0];

//======================================================//
//                  BUTTON EVENCLICK                    //
//======================================================//

// Set button event via element's class.
$('.btn-select').click(function()
{
    var btn_id = $(this).attr('id');

    BTN_SELECT(btn_id);

    return;
});

$('.btn-mc').click(function()
{
    var btn_id = $(this).attr('id');

    BTN_MC(btn_id);

    return;
});

// Set button event via element's id.
$('#btn-cta-free').click(function()
{
    $('#BLOCK-1').animate({"opacity":0}, 'slow', function()
    {
        $('#BLOCK-1').addClass("element-inactive");
        $('#BLOCK-2').removeClass("element-inactive");
        $('#BLOCK-2').animate({"opacity":1}, 'slow');
    });
   
    return;
});

$('#BTN-NEXT-1').click(function()
{
    var counter = 0;
    for(var i = 0; i < 3; i++)
    {
        if(COUNT_1[i] != 0)
        {
            counter++
        }
    }

    if(counter == 3)
    {
        $('#card-1').hide();
        $('#card-2').show();
        $("#CARD_ITEM_NEXT_4").click();

        PAGE_IDENTIFIER_ACTIVATOR(true);
    }
    else
    {
        alert("Please select the neccessary fields before you can proceed.");
    }
    return;
});

//======================================================//
//                        FUNCTIONS                     //
//======================================================//
function PAGE_IDENTIFIER_ACTIVATOR(COMMAND)
{
    if(COMMAND)
    {
        $(".p-2").addClass("active");
    }   
    else{
        $(".p-2").removeClass("active");
    }
}

// For the selecting of buttons for configuration and activating the 'Next' button.
function BTN_SELECT(btn_id)
{
    if(btn_id == "BTN-CONF-2TB")
    {
        $( "#BTN-CONF-2TB" ).addClass( "btn-selected" );
        $( "#BTN-CONF-8TB" ).removeClass( "btn-selected" );
        
        if(COUNT_1[0] == 0)
        {
            COUNT_1[0]  = 1
        }
    }
    else if(btn_id == "BTN-CONF-8TB")
    {
        $( "#BTN-CONF-2TB" ).removeClass( "btn-selected" );
        $( "#BTN-CONF-8TB" ).addClass( "btn-selected" );

        if(COUNT_1[0] == 0)
        {
            COUNT_1[0]  = 1
        }
    }

    if(btn_id == "BTN-CONF-13INCH")
    {
        $( "#BTN-CONF-13INCH" ).addClass( "btn-selected" );
        $( "#BTN-CONF-16INCH" ).removeClass( "btn-selected" );

        if(COUNT_1[1] == 0)
        {
            COUNT_1[1]  = 1
        }
    }
    else if(btn_id == "BTN-CONF-16INCH")
    {
        $( "#BTN-CONF-13INCH" ).removeClass( "btn-selected" );
        $( "#BTN-CONF-16INCH" ).addClass( "btn-selected" );

        if(COUNT_1[1] == 0)
        {
            COUNT_1[1]  = 1
        }
    }

    if(btn_id == "BTN-CONF-SPACE")
    {
        $( "#BTN-CONF-SPACE" ).addClass( "btn-selected" );
        $( "#BTN-CONF-SILVER" ).removeClass( "btn-selected" );

        if(COUNT_1[2] == 0)
        {
            COUNT_1[2]  = 1
        }
    }
    else if(btn_id == "BTN-CONF-SILVER")
    {
        $( "#BTN-CONF-SPACE" ).removeClass( "btn-selected" );
        $( "#BTN-CONF-SILVER" ).addClass( "btn-selected" );

        if(COUNT_1[2] == 0)
        {
            COUNT_1[2]  = 1
        }
    }

    if(COUNT_1[0] !=  0 && COUNT_1[1] != 0 && COUNT_1[2] != 0)
    {
        $( "#BTN-NEXT-1" ).removeClass( "btn-inactive" );
    }
} 

// For the next question.
function BTN_MC_MOVE_NEXT(BTN_ITEM_NO)
{  
    var NEXT_CAROUSEL_ITEM_NO = +BTN_ITEM_NO + 1;
    
    if(BTN_ITEM_NO ==  4)
    {
        NEXT_CAROUSEL_ITEM_NO  = 1;
    }

    $("#CAROUSEL_ITEM_"+BTN_ITEM_NO).animate({"opacity":0}, "fast", 
    function()
    {
        $("#CAROUSEL_ITEM_"+NEXT_CAROUSEL_ITEM_NO).removeClass("element-inactive");
        $("#CAROUSEL_ITEM_"+NEXT_CAROUSEL_ITEM_NO).animate({"opacity": 1}, "fast",
        function(){
            $("#CAROUSEL_ITEM_"+BTN_ITEM_NO).addClass("element-inactive");
        });
    });
}

// For the selecting of answer 'Yes/No' and activating of the 'Next' button.
function  BTN_MC(btn_id)
{
    var counter = false;

    for(var i = 1; i <= 4; i++)
    {
        if(btn_id == "BTN-MC-YES-"+i)
        {
            $( "#BTN-MC-YES-"+i ).addClass( "btn-selected" );
            $( "#BTN-MC-NO-"+i ).removeClass( "btn-selected" );
            
            counter = true;
            break;
        }
    }

    if(!counter)
    {
        for(var i = 1; i <= 4; i++)
        {
            if(btn_id == "BTN-MC-NO-"+i)
            {
                $( "#BTN-MC-YES-"+i ).removeClass( "btn-selected" );
                $( "#BTN-MC-NO-"+i ).addClass( "btn-selected" );

                break;
            }
        }
    }
}

function GO_TO_CONFIRMATION()
{
    $('#BLOCK-2').animate({"opacity":0}, 'slow', function()
    {
        $('#BLOCK-2').addClass("element-inactive");
        $('#BLOCK-3').removeClass("element-inactive");
        $('#BLOCK-3').animate({"opacity":1}, 'slow');
        setTimeout(function()
        { 
            $('#BLOCK-3').animate({"opacity":0}, 'slow', function()
            {
                $('#BLOCK-3').addClass("element-inactive");
                $('#BLOCK-4').removeClass("element-inactive");
                $('#BLOCK-4').animate({"opacity":1}, 'slow');
            });
        }, 5000);
    });
}