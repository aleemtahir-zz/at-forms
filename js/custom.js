$( document ).ready(function() {
  
    

    //Radio Button onClick
    $(".radio-custom").on('click', function(){

        myClass = getBtnClass(this);
        
        $("."+myClass).each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        //bed-spinner
        if(myClass === 'btn-place'){
            $('.bed-spinner').css('display','');
        }

        //choose-services
        var data = $(this).attr('data');

        if(data != '' && data != undefined)
        {
            add_service(data,myClass);
        }

    });

    //wrapper-sc-box Button onClick
    $(".wrapper-sc-box").on('click', function(){
        if($(this).hasClass('active'))
            $(this).removeClass('active');
        else{
            
            $(this).addClass('active');
        }

    });

    //Number Spinner
    var action;
    $(".number-spinner button").mousedown(function () {
        btn = $(this);
        btnClass = getBtnClass(this);
        input = btn.closest('.number-spinner').find('input');
        btn.closest('.number-spinner').find('button').prop("disabled", false);
        var valueName = input.attr('name-value');
        if (btn.attr('data-dir') == 'up') {
            action = setInterval(function(){
                if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
                    let text = parseInt(input.val())+1+ valueName;
                    input.val(text);
                    add_service(text,btnClass);
                }else{
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
        } else {
            action = setInterval(function(){
                if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
                    let text = parseInt(input.val())-1+ valueName;
                    input.val(text);
                    add_service(text,btnClass);
                }else{
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
        }
    }).mouseup(function(){
        clearInterval(action);
    });


    //Pagination
    $('#btn-next').on('click',function(){
        $('#page1').hide();
        $('#page2').show();
    });
    $('#btn-back').on('click',function(){
        $('#page2').hide();
        $('#page1').show();
    });

});//End Document Ready


//show password function
function showPassword() {
    var x = document.getElementById("password-field");
    var y = document.getElementById("swap-password");
    if (x.type === "password") {
        x.type = "text";
        y.textContent = "Hide Password";
    } else {
        x.type = "password";
        y.textContent = "Show Password";
    }
}

//add choose service list
function add_service(data,customClass)
{
    var flag = false;
    var choosed_services = $('.choosed-services');
    
    if(choosed_services.has('li').length != 0)
    {
        
        $('.choosed-services li').each(function(){
            
            if($(this).hasClass(customClass)){
                flag = true;
            }

        });

        if(flag){
            $('.'+customClass+' span').text(data);
        }
        else
        {
            let li = document.createElement("li");
            li.className = customClass;

            let i = document.createElement("i");
            i.className = 'fas fa-plus';
            
            let span = document.createElement("span")
            span.innerHTML = data;
            
            li.append(i,span);
            choosed_services.append(li);
        }
    }
    else
    {
        let li = document.createElement("li");
        li.className = customClass;

        let i = document.createElement("i");
        i.className = 'fas fa-plus';
        
        let span = document.createElement("span")
        span.innerHTML = data;
        
        li.append(i,span);
        choosed_services.last().append(li);

    } 
}

//get Btn Class
function getBtnClass(scope)
{
    var btnMapper = ['btn-sub', 'btn-place', 'btn-floor', 'btn-side', 'btn-tap', 'btn-book', 'btn-conservatory', 'btn-glassroof', 'btn-skylight'];

    for (var i = btnMapper.length - 1; i >= 0; i--) 
    {
        if($(scope).hasClass(btnMapper[i])){
            var btnClass = btnMapper[i];
            break;
        }
    }

    return btnClass;
}