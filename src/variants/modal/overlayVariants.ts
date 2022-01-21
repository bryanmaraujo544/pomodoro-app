export const overlayVariants = {
  show: {
    opacity: 1,
    zIndex: 999,
    transition: {
      when: "beforeChildren"
    }
  },
  hidden: {
    transition: {
      when: "afterChildren",
    },
    opacity: 0,
    zIndex: -1,
  }
}