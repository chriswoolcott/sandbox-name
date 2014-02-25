/*
Embed in a Visualforce page to retrieve the name of the sandbox.
*/
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script>
    //jQuery into no conflict mode.
    var j$ = jQuery.noConflict();
    j$(document).ready(function(){
        //locate the div that contains the sandbox information
        var ele = j$('div.multiforce > div.messages > div.msgContent span.normalImportance span');
        if(ele){
            //if we've found the element, validate the message is a sandbox identification.
            //check that the text of the first element equals Sandbox:
            if(ele.size() === 2){
                if(ele.eq(0).text().trim() === 'Sandbox:'){
                    //We've confirmed we are logged into a sandbox
                    var sbName = ele.eq(1).text().trim();  
                    alert(sbName);
                }
                
            }
        }
        else{
            //no luck using this method
            alert('No luck resolving sandbox name.');
        }
    });
</script>