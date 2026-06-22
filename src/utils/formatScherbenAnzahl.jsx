const formatNumber = (scherbenAnzahl) => {
  if (scherbenAnzahl >= 1_000_000) {
    return (scherbenAnzahl / 1_000_000).toFixed(3) + " M";
  }

  if (scherbenAnzahl >= 1_000) {
    return scherbenAnzahl.toLocaleString("de-DE") + " K";
  }

  return scherbenAnzahl.toString();
};

export default formatNumber;
