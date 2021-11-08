/* global bootstrap */ // Tell ESLint to ignore undefined `bootstrap`.

// Page Initialization
window.addEventListener('DOMContentLoaded', function () {
	/* Initialize tooltips. */
	const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"], #editBtn'));

	// Sidebar tooltips default right
	// TODO: #drawer -> #collapseBtn
	const sidebarTooltipTriggerList = [].slice.call(
		document.querySelectorAll('#sidebar [data-bs-toggle="tooltip"], #drawer [data-bs-toggle="tooltip"], #expandBtn')
	);
	sidebarTooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl, {
			placement: 'right',
		});
	});

	// Other tooltips
	const otherTooltipTriggerList = tooltipTriggerList.filter((element) => !sidebarTooltipTriggerList.includes(element));
	otherTooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
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
