jQuery(document).ready(function() {

	jQuery('textarea.markdown, textarea.markdown_extra, textarea.markdown_extra_with_smartypants').each(function(){
		jQuery(this).addClass('markdown_live');
	});

		//For every textfield, add a preview and button
	jQuery('textarea.markdown_live').each(function() {
		var mdsource = jQuery(this);
		//Preview visual
		var mdelement = document.createElement('div');
		mdelement.id = 'markdownpreview';
		//Preview controller
		var mdbutton = document.createElement('button');
		mdbutton.id = 'markdownbutton';
		mdbutton.innerHTML = 'Show preview'; //Set initial preview text
		mdbutton.className = 'button'; //Preview button class

		jQuery(this).after(mdbutton,mdelement); //Add both to DOM

		mdsource.keyup(function() {
			mdelement.innerHTML = textareaVal(mdsource);
		}) 
		mdsource.trigger('keyup'); //Fire initial event to apply markdown preview text

	});
	//------------------- SET TOGGLE OPEN/CLOSE
	jQuery('[id="markdownbutton"]').each(function() {
			jQuery(this).click(function() {
				var preview = jQuery(this).parent().find('#markdownpreview');
				preview.slideFadeToggle('fast');

				switch(jQuery(this).html()) {
					case 'Show preview': jQuery(this).html('Hide preview');break;
					default: jQuery(this).html('Show preview');
				}
				return false; //Override default click event
			})
		})
});

function textareaVal(mdsource) {
	return markdown.toHTML(mdsource.val());
}

jQuery.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};