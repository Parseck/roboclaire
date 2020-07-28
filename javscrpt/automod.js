function automod(){
	ComfyJS.onChat = ( user, message, flags, self, extra ) => {
	    var nocase = message.toLowerCase();
	      if ( nocase.includes( "faggot" ) === true ){
    	      		console.log( user + ": Dropped F-Slur. DISPLAY NAME: ", displayName + "MESSAGE ID: ", id + "USER ID: ", userId );
	    	    	ComfyJS.Say( "/ban " + user );
		 		}
		 	  else if ( nocase.includes( "tranny" ) === true ){
					console.log( user + ": Dropped T-Slur. DISPLAY NAME: ", displayName + "MESSAGE ID: ", id + "USER ID: ", userId );
					ComfyJS.Say( "/ban " + user )
	    	}
	     	else if (nocase.includes( "nigger" ) === true ){
					nbombhandler();
	    	}
	     	else if ( nocase.includes( "nigga" ) === true ){
					nbombhandler();
     		}
     		else if ( nocase.includes( "nibba" ) === true ){
					nbombhandler();
				}
	}
function nbombhandler(){
	console.log( user + ": Dropped N-Bomb. DISPLAY NAME: ", displayName + "MESSAGE ID: ", id + "USER ID: ", userId );
	ComfyJS.Say( "/ban " + user );
}
}