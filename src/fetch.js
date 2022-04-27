const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar', code: 'USD' },
  EUR: { symbol: '€', name: 'Euro', code: 'EUR' },
  GBP: { symbol: '£', name: 'British Pound', code: 'GBP' },
  CAD: { symbol: '$', name: 'Canadian Dollar', code: 'CAD' },
  AUD: { symbol: '$', name: 'Australian Dollar', code: 'AUD' },
  BRL: { symbol: 'R$', name: 'Brazilian Real', code: 'BRL' },
  CHF: { symbol: 'Fr', name: 'Swiss Franc', code: 'CHF' },
  CNY: { symbol: '¥', name: 'Chinese Yuan', code: 'CNY' },
  ALL: { symbol: 'Lek', name: 'Albanian Lek', code: 'ALL' },
  DKK: { symbol: 'kr', name: 'Danish Krone', code: 'DKK' },
  HKD: { symbol: '$', name: 'Hong Kong Dollar', code: 'HKD' },
  HRK: { symbol: 'kn', name: 'Croatian Kuna', code: 'HRK' },
  HUF: { symbol: 'Ft', name: 'Hungarian Forint', code: 'HUF' },
  IDR: { symbol: 'Rp', name: 'Indonesian Rupiah', code: 'IDR' },
  ILS: { symbol: '₪', name: 'Israeli New Sheqel', code: 'ILS' },
  INR: { symbol: '₹', name: 'Indian Rupee', code: 'INR' },
  ISK: { symbol: 'kr', name: 'Icelandic Króna', code: 'ISK' },
  JPY: { symbol: '¥', name: 'Japanese Yen', code: 'JPY' },
  KRW: { symbol: '₩', name: 'South Korean Won', code: 'KRW' },
  MXN: { symbol: '$', name: 'Mexican Peso', code: 'MXN' },
  MYR: { symbol: 'RM', name: 'Malaysian Ringgit', code: 'MYR' },
  NOK: { symbol: 'kr', name: 'Norwegian Krone', code: 'NOK' },
  NZD: { symbol: '$', name: 'New Zealand Dollar', code: 'NZD' },
  PHP: { symbol: '₱', name: 'Philippine Peso', code: 'PHP' },
  PLN: { symbol: 'zł', name: 'Polish Zloty', code: 'PLN' },
  RON: { symbol: 'lei', name: 'Romanian Leu', code: 'RON' },
  RUB: { symbol: '₽', name: 'Russian Ruble', code: 'RUB' },
  SEK: { symbol: 'kr', name: 'Swedish Krona', code: 'SEK' },
  SGD: { symbol: '$', name: 'Singapore Dollar', code: 'SGD' },
  THB: { symbol: '฿', name: 'Thai Baht', code: 'THB' },
  TRY: { symbol: '₺', name: 'Turkish Lira', code: 'TRY' },
  ZAR: { symbol: 'R', name: 'South African Rand', code: 'ZAR' },
  AMD: { symbol: 'դր.', name: 'Armenian Dram', code: 'AMD' },
  AZN: { symbol: '₼', name: 'Azerbaijan Manat', code: 'AZN' },
  BGN: { symbol: 'лв', name: 'Bulgarian Lev', code: 'BGN' },
  BYN: { symbol: 'Br', name: 'Belarusian Ruble', code: 'BYN' },
  GEL: { symbol: '₾', name: 'Georgian Lari', code: 'GEL' },
  KGS: { symbol: 'сом', name: 'Kyrgyzstani Som', code: 'KGS' },
  KZT: { symbol: '₸', name: 'Kazakhstani Tenge', code: 'KZT' },
  MDL: { symbol: 'L', name: 'Moldovan Leu', code: 'MDL' },
  MKD: { symbol: 'ден', name: 'Macedonian Denar', code: 'MKD' },
  RSD: { symbol: 'Дин.', name: 'Serbian Dinar', code: 'RSD' },
  UAH: { symbol: '₴', name: 'Ukrainian Hryvnia', code: 'UAH' },
  CZK: { symbol: 'Kč', name: 'Czech Koruna', code: 'CZK' },
}

function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }

  return Math.floor(seconds) + " seconds";
}

function displayPrice(price) {
  if (typeof price === 'number' || typeof price === 'string') {
    return '€' + price
  } else {
    return CURRENCIES[price.currency].symbol + price.amount
  }
}


(async function() {
  const res = await fetch('https://list.vitrin.cloud/')
  const data = await res.json()

  const video = document.getElementById('video')

  const index = Math.random() > .5 ? 0 : 1

  document.getElementById('source').setAttribute('src', data[index].video.url)
  video.load()

  document.getElementById('title').textContent = data[index].title
  document.getElementById('price').textContent = displayPrice(data[index].price)
  document.getElementById('time').textContent = timeSince(new Date(data[index].submit_time)) + ' ago'
  document.getElementById('location').textContent = data[index].location.address
})()
