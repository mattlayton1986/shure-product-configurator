import styles from './styles.module.scss';

const mockData = {
  zipCode: '60613',
  countryCode: 'US',
};

async function getLatLon(zipCode, countryCode) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );
  return res.json();
}

async function getCurrentWeather(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  return res.json();
}

async function CurrentWeather({ lat, lon, city, zip, country }) {
  const currentWeather = await getCurrentWeather(lat, lon);
  return (
    <article>
      <p>
        Current weather for {city}, {zip}, {country}:
      </p>
      <p>Current temperature: {currentWeather.main.temp} F</p>
      <p>Low: {currentWeather.main.temp_min} F</p>
      <p>High: {currentWeather.main.temp_max} F</p>
    </article>
  );
}

export default async function WeatherPage() {
  const { lat, lon, name, zip, country } = await getLatLon(
    mockData.zipCode,
    mockData.countryCode
  );
  return (
    <section className={styles.section}>
      <CurrentWeather
        lat={lat}
        lon={lon}
        city={name}
        zip={zip}
        country={country}
      />
    </section>
  );
}
