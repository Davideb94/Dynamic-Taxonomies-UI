    function init(){
        
        //Fifth level
        var samsung_m2070 = new Node( laser, null, "Samsung M2070" );
        var canon_isensys = new Node( laser, null, "Canon ISensys" );
        
        var canon_pixma = new Node( inkjet, null, "Canon Pixma" );
        
        //Fourth level 
        var laser = new Node( printers, [samsung_m2070, canon_isensys], "laser" );
        var inkjet = new Node( printers, [canon_pixma], "inkjet" );
        
        var logitech = new Node( keyboards, null, "Logitech" );
        var trust = new Node( keyboards, null, "Trust" );
        
        var eos_kiss = new Node( canons, null, "EOS Kiss" );
        var eos_rebel_t5 = new Node( canons, null, "EOS Rebel" );
        
        var d3200 = new Node( nikons, null, "D 3200" );
        var d5300 = new Node( nikons, null, "D 5300");
        
        //Third level
        var printers = new Node( components, [laser, inkjet], "printers" );
        var keyboards = new Node( components, [logitech, trust], "keyboards" );
        
        var acer_aspire_az3 = new Node( pcs, null, "aspire az3" );
        var dell_inspiron = new Node( pcs, null, "dell inspiron" );
        
        var imac = new Node( apple, null, "iMac" );
        var macbook = new Node( apple, null, "macBook" );
        
        var thinkpad = new Node( laptop, null, "thinkpad" );
        
        var display = new Node( parts, null, "display" );
        var battery = new Node( parts, null, "battery" );
        
        var cover = new Node( accessories, null, "cover" );
        var earphones = new Node( accessories, null, "earphones" );
        var iphone7 = new Node( phones, null, "iPhone 7" );
        var galaxy = new Node( phones, null, "Galaxy" );
        var nexus = new Node( phones, null, "Nexus" );
        
        var samsung = new Node( curved_tvs, null, "Samsung" );
        var sony = new Node( curved_tvs, null, "Sony" );
        
        var vizio_d48 = new Node( smart_tvs, null, "Vizio D48" );
        
        var lg = new Node( led, null, "LG" );
        
        var fusion = new Node( lenses, null, "fusion" );
        var canon_ef_50 = new Node( lenses, null, "EF50" );
        var sony_fe = new Node( lenses, null, "Sony FE" );
        
        var power_shot = new Node( compact, null, "Power Shot" );
        var coolpix = new Node( compact, null, "Coolpix" );
        
        var canons = new Node( professional, [eos_kiss, eos_rebel_t5], "Canons" );
        var nikons = new Node( professional, [d3200, d5300], "Nikons" );

        //Second level
        var components = new Node( computers, [printers, keyboards], "components" );
        var pcs = new Node( computers, [acer_aspire_az3, dell_inspiron], "pcs" );
        var apple = new Node( computers, [imac, macbook], "apple" );
        var laptop = new Node( computers, [macbook, thinkpad], "laptop" );
        
        var parts = new Node( mobiles, [display, battery], "parts" );
        var accessories = new Node( mobiles, [cover, earphones], "accessories" );
        var phones = new Node( mobiles, [iphone7, galaxy, nexus], "phones" );
        
        var curved_tvs = new Node( tvs, [samsung, sony], "curved tvs" );
        var smart_tvs = new Node( tvs, [vizio_d48], "smart tvs" );
        var led = new Node( tvs, [lg], "led" );
        
        var lenses = new Node( cameras, [fusion, canon_ef_50, sony_fe], "lenses" );
        var compact = new Node( cameras, [power_shot, coolpix], "compact" );
        var professional = new Node( cameras, [canons, nikons], "professional" );
        
        
        //First level
        var computers = new Node( null, [components, pcs, apple, laptop], "computers" );
        var mobiles = new Node( null, [parts, accessories, phones], "mobiles" );
        var tvs = new Node( null, [curved_tvs, smart_tvs, led], "tvs" );
        var cameras = new Node(null, [lenses, compact, professional], "cameras" );
        

        var tree = new Tree( [computers, mobiles, tvs, cameras] );
        
        return tree;
        
    }