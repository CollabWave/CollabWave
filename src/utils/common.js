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

const blogAreas = [
  { id: 1, value: 'fashon' },
  { id: 2, value: 'travel' },
  { id: 3, value: 'food and cooking' },
  { id: 4, value: 'technologies' },
  { id: 5, value: 'education' },
  { id: 6, value: 'health' },
  { id: 7, value: 'photography' },
  { id: 8, value: 'business' },
  { id: 9, value: 'culture and arts' },
  { id: 10, value: 'maternity and parenthood' },
  { id: 11, value: 'design' },
  { id: 12, value: 'sciences' },
  { id: 13, value: 'technics and innovations' },
  { id: 14, value: 'sports' },
  { id: 15, value: 'podcasts' },
  { id: 16, value: 'environment' },
  { id: 17, value: 'gaming' },
  { id: 18, value: 'children' },
  { id: 19, value: 'news' },
  { id: 20, value: 'politics' },
  { id: 21, value: 'music' },
  { id: 22, value: 'art' },
  { id: 23, value: 'books and writing' },
  { id: 24, value: 'digital content' },
  { id: 25, value: 'cosmetics and skincare' },
  { id: 26, value: 'beauty industry' },
  { id: 27, value: 'personal blog' },
  { id: 28, value: 'public figure' },
  { id: 29, value: 'entertainment content' },
  { id: 30, value: 'influencer blogger' },
];

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export { moreNavigation, goToTop, languages, blogAreas };
