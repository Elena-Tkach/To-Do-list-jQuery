$(document).ready(function() {

    const emptyListMessageEl = $('.js-textnone'),
	 	  toDoListEl = $('.js-list'),
	 	  formEl = $('.js-form'),
		  titleInputEl = $('.js-formtitle'),
		  descriptionInputEl = $('.js-formtextarea');
		

	formEl.on('submit', onFormSubmit);

	toDoListEl.on('click', '.js-btnclear', onDeleteBtnClick);

	toDoListEl.on('click', '.js-btnarrow', onCollapseBtnClick);


	// Создать дело
	function onFormSubmit() {  
		event.preventDefault();

		titleInputElName = titleInputEl.val(),
		descriptionInputElText = descriptionInputEl.val();

		emptyListMessageEl.hide();

		// Генерировать id		
		const id = `f${(~~(Math.random()*1e8)).toString(16)}`;

		toDoListEl.append(`
			
			<li class="list__item js-listitem">
				<article class="js-itemArticle">
					<header class="item__header">
						<h3 class="header__title">${titleInputElName}</h3>
						<button class="button__arrow js-btnarrow" type="button" aria-controls="${id}" aria-label="Свернуть список дел" aria-expanded="true">
						</button>
						<button class="button__clear js-btnclear" type="button" aria-label="Удалить дело"></button>
					</header>
					<div class="article__desc js-articleDesc" id="${id}">	
						<p class="article__text">${descriptionInputElText}</p>
					</div>
				</article>
			</li>
		`);
	
		this.reset();
	};	


	//Удалить дело	
	function onDeleteBtnClick() { 
		listItem = $(this).parents('.js-listitem');

		listItem. remove();

		if (!toDoListEl.children().length) {
			emptyListMessageEl.show();
		};
	};


	// Свернуть описание дел
	function onCollapseBtnClick() {
		const caseDescription = $(this).parents('.js-itemArticle').find('.js-articleDesc');

		$(this).toggleClass('js-arrowUp');

		caseDescription.slideToggle(); 

		if($(this).attr('aria-expanded') ==='true') {
			$(this).attr({'aria-expanded': 'false', 'aria-label': 'Развернуть список дел'});
		} else {$(this).attr({'aria-expanded': 'true', 'aria-label': 'Свернуть список дел'});
		};
	};

});