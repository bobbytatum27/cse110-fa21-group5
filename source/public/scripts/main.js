/* global bootstrap */ // Tell ESLint to ignore undefined `bootstrap`.

// Page Initialization
window.addEventListener('DOMContentLoaded', function () {
	/* Initialize tooltips. */
	const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"], #expandBtn'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl, {
			placement: 'right',
		});
	});

	/* Toggle expand button visibility based on drawer visibility. */
	const drawerOffcanvas = document.getElementById('drawer');
	const expandBtn = document.getElementById('expandBtn');

	// Upon hiding drawer, show expand button
	drawerOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
		expandBtn.classList.remove('invisible');
		drawerOffcanvas.classList.remove('position-static');
	});

	// Upon showing drawer, hide expand button
	drawerOffcanvas.addEventListener('show.bs.offcanvas', function () {
		drawerOffcanvas.classList.add('position-static');
		expandBtn.classList.add('invisible');
	});
});
