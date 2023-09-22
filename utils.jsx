const moreNavigation = [
    { name: "About us", href: "about" },
    { name: "Contacts", href: "contacts",},
    { name: "Statistics", href: "statistics" },
    { name: "Features", href: "features" },
    { name: "Review", href: "review" },
    { name: "Blog", href: "blog" },
  ];
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  export { moreNavigation, goToTop };