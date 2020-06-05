let input_el = document.querySelector('input[name="sourceFile"]');

let textarea_el = document.createElement('textarea');
input_el.getAttributeNames().forEach( attrName => {
    textarea_el.setAttribute( attrName, 
    (document.createAttribute( attrName ).value =            
    input_el.getAttribute( attrName ) )
    );
});

input_el.replaceWith(textarea_el);

let cfiles=document.querySelectorAll('.field');
cfiles[1].innerHTML="Put Code Here:";

let form = document.querySelector('.submitForm');
let pop_up = document.createAttribute("target");        
pop_up.value = "_blank";           
form.setAttributeNode(pop_up);           

button= document.querySelector(".submit");
button.addEventListener('click', function (event) {
    textarea_el.select();
});

$(function () {
    function adjustNotice(programTypeId) {
        var $programTypeNotice = $(".programTypeNotice");
        $programTypeNotice.text("");
                if (programTypeId === 7) {
                    $programTypeNotice.text("Almost always, if you send a solution on PyPy, it works much faster");
                }
                if (programTypeId === 31) {
                    $programTypeNotice.text("Almost always, if you send a solution on PyPy, it works much faster");
                }
    }

            adjustNotice(54);


    $("select[name='programTypeId']").change(function () {
        adjustNotice(parseInt($(this).val()));
    });

    $(".submit-form, .submitForm").submitOnce(function () {
        var form = $(this);
        var $ftaa = form.find("textarea[name='ftaa']");
        var $bfaa = form.find("textarea[name='bfaa']");

        if (window._ftaa && window._bfaa) {
            $ftaa.val(window._ftaa);
            $bfaa.val(window._bfaa);
        }

        if (form.attr("enctype") === "multipart/form-data") {
            var sourceFiles = form.find(".table-form textarea[name=sourceFile]");

            if (sourceFiles.length === 1 && sourceFiles[0].files && sourceFiles[0].files.length === 0) {
                form.removeAttr("enctype");
            }
        }
        return true;
    });
});