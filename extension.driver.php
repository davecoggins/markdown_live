<?php

class extension_markdown_live extends Extension {

	public function about() {
		return array(
			'name'			=> 'Markdown Live',
			'version'		=> '1.0',
			'release-date'	=> '2013-04-23',
			'author'		=> array(
				array(
					'name'			=> 'George Wilson',
					'website'		=> 'http://g-wilson.co.uk',
					'email'			=> 'george@g-wilson.co.uk'
				),
				array(
					'name'			=> 'Arthur Mingard',
					'website'		=> 'http://arthurmingard.com',
					'email'			=> 'info@arthurmingard.com'
				)
			),
			'description'	=> 'Preview markdown fields in the editor.'
		);
	}

	public function getSubscribedDelegates() {
		return array(
			array(
				'page'		=> '/backend/',
				'delegate'	=> 'InitaliseAdminPageHead',
				'callback'	=> 'initializeAdmin'
			),
		);
	}
	
	public function initializeAdmin($context) {	
		$page = Administration::instance()->Page;
		$context = $page->getContext();
		$callback = Administration::instance()->getPageCallback();
		
		if ($page instanceof contentPublish and in_array($context['page'], array('new', 'edit'))) {	
			$page->addScriptToHead(URL . '/extensions/markdown_live/assets/markdown.js', 900199);
			$page->addScriptToHead(URL . '/extensions/markdown_live/assets/markdown.live.js', 900200);
			$page->addStylesheetToHead(URL . '/extensions/markdown_live/assets/markdown.live.css', 'screen', 900201);
		}
	}

}

?>
