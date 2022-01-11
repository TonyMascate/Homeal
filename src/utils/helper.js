const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number / 1);
  return newNumber;
};

export default formatPrice
