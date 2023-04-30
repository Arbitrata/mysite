export const handleScroll = (id, position, duration) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: position });

  element.classList.add("scroll-smooth", `scroll-${duration}`);
};

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
