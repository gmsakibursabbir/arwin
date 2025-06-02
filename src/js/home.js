// for header
// Desktop dropdown
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
let dropdownOpen = false;

dropdownToggle.addEventListener('click', e => {
  e.stopPropagation();
  dropdownOpen = !dropdownOpen;
  dropdownMenu.classList.toggle('hidden', !dropdownOpen);
});

document.addEventListener('click', e => {
  if (!document.getElementById('language-dropdown').contains(e.target)) {
    dropdownMenu.classList.add('hidden');
    dropdownOpen = false;
  }
});

// Mobile dropdown
const mobileToggle = document.getElementById('mobile-dropdown-toggle');
const mobileMenu = document.getElementById('mobile-dropdown-menu');
let mobileOpen = false;

mobileToggle.addEventListener('click', e => {
  e.stopPropagation();
  mobileOpen = !mobileOpen;
  mobileMenu.classList.toggle('hidden', !mobileOpen);
});

document.addEventListener('click', e => {
  if (!document.getElementById('mobile-lang-dropdown').contains(e.target)) {
    mobileMenu.classList.add('hidden');
    mobileOpen = false;
  }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuContainer = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuContainer.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
  const highlightedDates = [
    '2024-03-02',
    '2024-03-13',
    '2024-03-18',
    '2024-03-22',
  ];

  const calendar = new FullCalendar.Calendar(
    document.getElementById('calendar'),
    {
      initialView: 'dayGridMonth',
      initialDate: '2024-03-01',
      headerToolbar: {
        left: '',
        center: 'title',
        right: 'prev,next',
      },
      fixedWeekCount: false,
      selectable: false,
      editable: false,
      showNonCurrentDates: false,
      height: 'auto',
      events: highlightedDates.map(date => ({
        start: date,
        display: 'background',
        classNames: ['highlighted'],
      })),
      dayCellDidMount: function (info) {
        const dateStr = info.date.toISOString().split('T')[0];
        if (highlightedDates.includes(dateStr)) {
          const numberEl = info.el.querySelector('.fc-daygrid-day-number');
          if (numberEl) {
            numberEl.style.color = '#ffffff';
            numberEl.style.fontWeight = '700';
          }
        }
      },
    }
  );

  calendar.render();
});
