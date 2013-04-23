jQuery(document).ready(function() {

	jQuery('textarea.markdown, textarea.markdown_extra, textarea.markdown_extra_with_smartypants').each(function(){
		jQuery(this).addClass('markdown_live');
	});

	var mdsource = jQuery('textarea.markdown_live').first();
	var mdelement = document.createElement('div');
	mdelement.id = 'markdownpreview';
	var mdbutton = document.createElement('button');
	mdbutton.id = 'markdownbutton';
	mdbutton.innerHTML = 'Show preview';
	mdbutton.className = 'button';

	mdsource.after(mdbutton,mdelement);

	jQuery('#markdownbutton').click(function(){
		jQuery('#markdownpreview').html(textareaVal(mdsource));
		jQuery('#markdownpreview').slideFadeToggle('fast');
		if (jQuery(this).html() == 'Hide preview') {
			jQuery(this).html('Show preview');
		} else {
			jQuery(this).html('Hide preview');
		}
		return false;
	});
	mdsource.keyup(function() {
		jQuery('#markdownpreview').html(textareaVal(mdsource));
	})
});

function textareaVal(mdsource) {
	return markdown.toHTML(mdsource.val());
}

jQuery.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};