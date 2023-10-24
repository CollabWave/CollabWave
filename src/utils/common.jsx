const moreNavigation = [
  { name: 'About us', href: 'about' },
  { name: 'Contacts', href: 'contacts' },
  { name: 'Payment system', href: 'payments' },
  { name: 'Statistics', href: 'statistics' },
  { name: 'Features', href: 'features' },
  { name: 'Review', href: 'review' },
  { name: 'Blog', href: 'blog' },
];
const languages = [
  { name: 'ENG', href: 'en' },
  { name: 'UKR', href: 'uk' },
  { name: 'RUS', href: 'ru' },
  { name: 'ITA', href: 'it' },
];

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export { moreNavigation, goToTop, languages };
