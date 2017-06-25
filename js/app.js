window.onload = function(){
    
    console.log("App is ready to rock!");
    
    var body = document.getElementsByTagName( "body" )[0];
    var wheel = document.getElementById( "wheel" );
    var search = document.getElementById( "search" );
    var close = document.getElementById( "close" );
    var selector = document.getElementById( "selector" );   
    var elements = document.getElementsByClassName( "wheel_elem" );
    var zoom_out = document.getElementById( "zoom_out_button" );
    var remove_last_search = document.getElementById( "remove_last_search" );
    
    setListeners();
    
    setCurrentLevel( tree.roots );
    updateWheel( tree.roots );

    function setListeners(){
        

        close.addEventListener( "click", closeMenu );
        search.addEventListener( "click", addToSearch );
        selector.addEventListener( "click", callZoomIn );
        wheel.addEventListener( "scroll", select );
        zoom_out.addEventListener( "click", zoomOut );
        remove_last_search.addEventListener( "click", removeLastSearch );
        
        uxInit( "Navigate", "Add both a canon and a nikon to your search", ["browse the tree", "zoom in"] );
        
    }
    
    function select(){
                
        for( var i=0; i < elements.length; i++){
            
            var difference = selector.getBoundingClientRect().top - elements[i].getBoundingClientRect().top;
            
            if( -50 <= difference && difference <= 50 ){

                checkChildren( i );
                elements[i].className = "wheel_elem overlapped";

            }
            else{

                elements[i].className = "wheel_elem";

            }
            
        }
        
    }
            
}
