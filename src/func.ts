export function kelvinToCelsius(kelvin: number) {
  // Kelvin to Celsius formula: Celsius = Kelvin - 273.15
  const celsius = kelvin - 273.15;
  return Math.round(celsius);
}
