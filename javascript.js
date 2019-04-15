let active = document.querySelector('.active');
		let progress = document.querySelector('.progress');
		let prevBtn = document.querySelector('.prev');
		let nextBtn = document.querySelector('.next');
		
		function isPrev(){
			active.previousElementSibling?prevBtn.style.display = 'inline-block':prevBtn.style.display='none';
		}

		function isNext(){
			active.nextElementSibling?nextBtn.style.display = 'inline-block':nextBtn.style.display='none';
		}

		// call to check previous and next element
		isPrev();
		isNext();

		nextBtn.addEventListener('click',function(){
			let nextElem = active.nextElementSibling; 
			active.classList.remove('active');
			active = nextElem;
			active.classList.add('active');
			//increase width of progress bar
			progress.style.width = active.attributes[1].value + "%";
			isPrev();
			isNext();		
		});

		prevBtn.addEventListener('click',function(){
			let prevElem = active.previousElementSibling; 
			active.classList.remove('active');
			active = prevElem;
			active.classList.add('active');
			//increase width of progress bar
			progress.style.width = active.attributes[1].value + "%";
			isPrev();
			isNext();		
		});