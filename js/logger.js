var performed_event = null;
var triggered_function = null;
var date = null;

function getCurrentTime(){
    
    date = new Date();
    
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    
    return hour + ":" + minutes + ":" + seconds;
    
}

function coolLog(){
    
    console.log( "At " + getCurrentTime() + " " + performed_event + " was performed" );
    console.log( "executing " + triggered_function );
    console.log( "\n" );
    
}

/*
At 12:02:30 mouseclick was performed
executing closeMenu
*/


function uxLog( current_performed_event, current_triggered_function ){
    
    if( current_performed_event == null ){
        
        console.log( "Error in calling uxLog!" );
        
    }
    else if( current_triggered_function == null ){
        
        performed_event = current_performed_event;
        triggered_function = "NO SPECIFIED FUNCTION";
        
        coolLog();
        
    }
    else{
        
        performed_event = current_performed_event;
        triggered_function = current_triggered_function;
        
        coolLog();
        
    }
    
}

/*
A new test is starting!
on Mon Jun 05 2017 00:22:54 GMT+0200 (CEST)

name:
Navigate
description:
Add both a canon and a nikon to your search
actions to test:
- browse the tree
- zoom in
*/

function uxInit( task_name, task_description, actions ){
    
    console.log( "\nA new test is starting!" );
    console.log( "on " + new Date() );
    
    if( task_name != null ){
        
        console.log( "\nname:\n" + task_name);
        
        if( task_description != null ){
        
            console.log( "description:\n" + task_description );

        }
        
    }
    
    if( actions != null ){
        
        console.log( "actions to test:\n" );
        for( var i = 0; i < actions.length; i++){
            
            console.log( "- " + actions[i] + "\n" );    
            
        }
        
    }

    console.log("");
    
}