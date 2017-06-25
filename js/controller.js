var navigation_history = [];
var current_level = [];
var current_search = [];
var tree = init();

function clearChildren( container ){
    
    while ( container.hasChildNodes() ) {    
        container.removeChild( container.lastChild );
    }
    
}

function updateWheel(){       //cleans the wheel, for each element in current_level creates a <li>...</li> and appends it to children
    
    var container = document.getElementById( "wheel_container" );
    var is_first_iteration = true;
    
    clearChildren( container );
    
    for( var i = 0; i < current_level.length; i++ ){

        var li = document.createElement("li");
        li.className = "wheel_elem";

        if( is_first_iteration ){

            li.className += " overlapped";

        }

        var p = document.createElement( "p" );
        var text = document.createTextNode( current_level[i].value );
        p.appendChild( text );

        li.appendChild( p );
        container.appendChild( li );
        
        is_first_iteration = false;

    }
    
    checkChildren( 0 );
    checkParents();
       
}

function updateLabels(){                //used by zoomIn. receives the element to push in the labels
    
    var container = document.getElementById("label_container");
    
    clearChildren( container );    
    
    for( var i = 0; i < navigation_history.length; i++ ){        
        
        var label = document.createElement( "li" );
        label.className = "labels";
        label.addEventListener( "click", function(){
            
            goTo( this );
            
        } );
        var p = document.createElement( "p" );
        var text = document.createTextNode( navigation_history[i].value );

        p.appendChild( text );
        label.appendChild( p );
        container.appendChild( label );
        
    }
    
    
}

function goTo( label ){
    
    var found = false;
    var counter = 0;
    var elems = document.getElementsByClassName( "labels" );
    var selected_id = null;
    
    label.id = "go_here";
    
    for( counter; counter < elems.length || !found; counter++ ){
        
        if( elems[counter] != undefined && elems[ counter ].id == "go_here" ){
            
            if( navigation_history[ counter ] != undefined){
                
                current_level = navigation_history[ counter ].children;
                             
            }
            else{
                
                current_level = tree.roots;
                
            }
            
            navigation_history.splice( 0, counter );
            
            updateLabels();
            updateWheel();
            
            found = true;
            
        }
        
    }
    
}

function setCurrentLevel( level ){      //need to keep track of the objects listed in the current level to push the selected object to navigation_history when zoomIn is performed
    
    current_level = level;
    
}

function zoomIn( tree ){
    
    var not_found = true; 
    var elements = document.getElementsByClassName( "wheel_elem" );    
    var counter = 0;
    
    for( counter = 0; counter < elements.length || not_found; counter++ ){
        
        if( elements[counter].className == "wheel_elem overlapped"){
            
            not_found = false;
            
            navigation_history.unshift( current_level[counter] );
            setCurrentLevel( current_level[counter].children );
            
            updateWheel();
            updateLabels();      
                        
        }
        
    }
    
}

function checkChildren( i ){

    var zoom_in = document.getElementById( "zoom-in" );

    if( current_level[i].children == null ){

        zoom_in.className = "hide";
        selector.removeEventListener( "click", callZoomIn );

    }
    else{

        zoom_in.className = "";
        selector.addEventListener( "click", callZoomIn );

    }

}

function checkParents(){
    
    var zoom_out = document.getElementById( "zoom_out_button" );
    
    if( navigation_history[0] == undefined ){
        
        zoom_out.className = "hide";
        
    }
    else{
        
        zoom_out.className = "";
        
    }
    
}

function callZoomIn(){

    zoomIn( tree );

}

function zoomOut(){

    if( navigation_history[1] != undefined ){
        
        current_level = navigation_history[1].children;
        navigation_history.splice(0,1);
        updateWheel();
        
    }
    else if( navigation_history[0] != undefined ){
        
        current_level = tree.roots;
        navigation_history.splice(0,1);
        updateWheel();
        
    }
    else{
        
        console.log("There's nothing to zoom out!");
        
    }
    
    updateLabels();

}

function closeMenu(){

    alert("The menu can't be closed in this test session!");

}

function addToSearch(){

    var found = false; 
    var elements = document.getElementsByClassName( "wheel_elem" );    
    var counter = 0;
    var selected_elem = null;
    
    for( counter = 0; counter < elements.length || !found; counter++ ){
        
        if( elements[ counter ].className == "wheel_elem overlapped" ){
            
            found = true;
            
            current_search.unshift( current_level[ counter ] );
            updateSearch();
            
        }
        
    }
    
    current_level = tree.roots;
    navigation_history = [];
    
    updateWheel();
    updateLabels();
    
    

}

function updateSearch(){
    
    var search_box = document.getElementById( "search_box" );
    
    clearChildren( search_box );
    
    for( counter = 0; counter < current_search.length; counter++ ){
                
        var li = document.createElement( "li" );
        var chip = document.createElement( "div" );
        chip.className = "chip";
        var img = document.createElement( "img" );
        img.src = "assets/icons/close.png";
        img.className = "search_elem";
        img.addEventListener( "click", function(){
            
            removeElemSearch( this );
            
        } );
        var text = document.createElement( "div" );
        text.className = "text";
        var p = document.createElement( "p" );
        var text_node = document.createTextNode( current_search[ counter ].value );
        
        search_box.appendChild( li );
        li.appendChild( chip );
        chip.appendChild( text );
        chip.appendChild( img );
        text.appendChild( p );
        p.appendChild( text_node );
        
    }
    
}

function removeLastSearch(){
    
    if( current_search[0] != undefined ){
        
        current_search.splice( 0, 1 );
        updateSearch();       
        
    }
    else{
        
        console.log( "Nothing to remove from current_search" );
        
    }
    
}

function removeElemSearch( img ){
    
    var found = false;
    var counter = 0;
    var elems = document.getElementsByClassName( "search_elem" );
    
    img.id = "to_remove";
    
    for( counter; counter < elems.length || !found; counter++ ){
        
        if( elems[counter] != undefined && elems[counter].id == "to_remove" ){
            
            current_search.splice( counter, 1 );
            updateSearch();
            
            found = true;
            
        }
        
    }
    
}