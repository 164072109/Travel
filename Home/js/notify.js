(function() {
//  "use strict";
    _notify = function(_content, _options) {
           		 $.notify({
					// options
					message: _content 
				},{
					// settings
					type: _options
				});  
    };

})();