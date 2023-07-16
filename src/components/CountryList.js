import React, { useState, useEffect } from 'react';
import Country from './Country';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const countriesByContinent = [
  {
    continent: 'Africa',
    countries: [
      { name: 'Algeria', code: 'dz' },
      { name: 'Angola', code: 'ao' },
      { name: 'Benin', code: 'bj' },
      { name: 'Botswana', code: 'bw' },
      { name: 'Burkina Faso', code: 'bf' },
      { name: 'Burundi', code: 'bi' },
      { name: 'Cameroon', code: 'cm' },
      { name: 'Cape Verde', code: 'cv' },
      { name: 'Central African Republic', code: 'cf' },
      { name: 'Chad', code: 'td' },
      { name: 'Comoros', code: 'km' },
      { name: 'Congo', code: 'cg' },
      { name: 'Djibouti', code: 'dj' },
      { name: 'Egypt', code: 'eg' },
      { name: 'Equatorial Guinea', code: 'gq' },
      { name: 'Eritrea', code: 'er' },
      { name: 'Eswatini', code: 'sz' },
      { name: 'Ethiopia', code: 'et' },
      { name: 'Gabon', code: 'ga' },
      { name: 'Gambia', code: 'gm' },
      { name: 'Ghana', code: 'gh' },
      { name: 'Guinea', code: 'gn' },
      { name: 'Guinea-Bissau', code: 'gw' },
      { name: 'Ivory Coast', code: 'ci' },
      { name: 'Kenya', code: 'ke' },
      { name: 'Lesotho', code: 'ls' },
      { name: 'Liberia', code: 'lr' },
      { name: 'Libya', code: 'ly' },
      { name: 'Madagascar', code: 'mg' },
      { name: 'Malawi', code: 'mw' },
      { name: 'Mali', code: 'ml' },
      { name: 'Mauritania', code: 'mr' },
      { name: 'Mauritius', code: 'mu' },
      { name: 'Morocco', code: 'ma' },
      { name: 'Mozambique', code: 'mz' },
      { name: 'Namibia', code: 'na' },
      { name: 'Niger', code: 'ne' },
      { name: 'Nigeria', code: 'ng' },
      { name: 'Rwanda', code: 'rw' },
      { name: 'Sao Tome and Principe', code: 'st' },
      { name: 'Senegal', code: 'sn' },
      { name: 'Seychelles', code: 'sc' },
      { name: 'Sierra Leone', code: 'sl' },
      { name: 'Somalia', code: 'so' },
      { name: 'South Africa', code: 'za' },
      { name: 'South Sudan', code: 'ss' },
      { name: 'Sudan', code: 'sd' },
      { name: 'Tanzania', code: 'tz' },
      { name: 'Togo', code: 'tg' },
      { name: 'Tunisia', code: 'tn' },
      { name: 'Uganda', code: 'ug' },
      { name: 'Zambia', code: 'zm' },
      { name: 'Zimbabwe', code: 'zw' }
    ]
  },
  {
  continent: 'Asia',
  countries: [
    { name: 'Afghanistan', code: 'af' },
    { name: 'Bahrain', code: 'bh' },
    { name: 'Bangladesh', code: 'bd' },
    { name: 'Bhutan', code: 'bt' },
    { name: 'Brunei', code: 'bn' },
    { name: 'Cambodia', code: 'kh' },
    { name: 'China', code: 'cn' },
    { name: 'East Timor', code: 'tl' },
    { name: 'India', code: 'in' },
    { name: 'Indonesia', code: 'id' },
    { name: 'Iran', code: 'ir' },
    { name: 'Iraq', code: 'iq' },
    { name: 'Israel', code: 'il' },
    { name: 'Japan', code: 'jp' },
    { name: 'Jordan', code: 'jo' },
    { name: 'Kazakhstan', code: 'kz' },
    { name: 'Kuwait', code: 'kw' },
    { name: 'Kyrgyzstan', code: 'kg' },
    { name: 'Laos', code: 'la' },
    { name: 'Lebanon', code: 'lb' },
    { name: 'Malaysia', code: 'my' },
    { name: 'Maldives', code: 'mv' },
    { name: 'Mongolia', code: 'mn' },
    { name: 'Myanmar', code: 'mm' },
    { name: 'Nepal', code: 'np' },
    { name: 'North Korea', code: 'kp' },
    { name: 'Oman', code: 'om' },
    { name: 'Pakistan', code: 'pk' },
    { name: 'Palestine', code: 'ps' },
    { name: 'Philippines', code: 'ph' },
    { name: 'Qatar', code: 'qa' },
    { name: 'Russia', code: 'ru' },
    { name: 'Saudi Arabia', code: 'sa' },
    { name: 'Singapore', code: 'sg' },
    { name: 'South Korea', code: 'kr' },
    { name: 'North Korea', code: 'kp' },
    { name: 'Sri Lanka', code: 'lk' },
    { name: 'Syria', code: 'sy' },
    { name: 'Taiwan', code: 'tw' },
    { name: 'Tajikistan', code: 'tj' },
    { name: 'Thailand', code: 'th' },
    { name: 'Turkey', code: 'tr' },
    { name: 'Turkmenistan', code: 'tm' },
    { name: 'United Arab Emirates', code: 'ae' },
    { name: 'Uzbekistan', code: 'uz' },
    { name: 'Vietnam', code: 'vn' },
    { name: 'Yemen', code: 'ye' }
  ]
},
{
  continent: 'Europe',
  countries: [
    { name: 'Albania', code: 'al' },
    { name: 'Andorra', code: 'ad' },
    { name: 'Austria', code: 'at' },
    { name: 'Belarus', code: 'by' },
    { name: 'Belgium', code: 'be' },
    { name: 'Bosnia and Herzegovina', code: 'ba' },
    { name: 'Bulgaria', code: 'bg' },
    { name: 'Croatia', code: 'hr' },
    { name: 'Cyprus', code: 'cy' },
    { name: 'Czech Republic', code: 'cz' },
    { name: 'Denmark', code: 'dk' },
    { name: 'Estonia', code: 'ee' },
    { name: 'Finland', code: 'fi' },
    { name: 'France', code: 'fr' },
    { name: 'Germany', code: 'de' },
    { name: 'Greece', code: 'gr' },
    { name: 'Hungary', code: 'hu' },
    { name: 'Iceland', code: 'is' },
    { name: 'Ireland', code: 'ie' },
    { name: 'Italy', code: 'it' },
    { name: 'Kosovo', code: 'xk' },
    { name: 'Latvia', code: 'lv' },
    { name: 'Liechtenstein', code: 'li' },
    { name: 'Lithuania', code: 'lt' },
    { name: 'Luxembourg', code: 'lu' },
    { name: 'Malta', code: 'mt' },
    { name: 'Moldova', code: 'md' },
    { name: 'Monaco', code: 'mc' },
    { name: 'Montenegro', code: 'me' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'North Macedonia', code: 'mk' },
    { name: 'Norway', code: 'no' },
    { name: 'Poland', code: 'pl' },
    { name: 'Portugal', code: 'pt' },
    { name: 'Romania', code: 'ro' },
    { name: 'Russia', code: 'ru' },
    { name: 'San Marino', code: 'sm' },
    { name: 'Serbia', code: 'rs' },
    { name: 'Slovakia', code: 'sk' },
    { name: 'Slovenia', code: 'si' },
    { name: 'Spain', code: 'es' },
    { name: 'Sweden', code: 'se' },
    { name: 'Switzerland', code: 'ch' },
    { name: 'Ukraine', code: 'ua' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'Vatican City', code: 'va' }
  ]
},
  {
  continent: 'North America',
  countries: [
    { name: 'Antigua and Barbuda', code: 'ag' },
    { name: 'Bahamas', code: 'bs' },
    { name: 'Barbados', code: 'bb' },
    { name: 'Belize', code: 'bz' },
    { name: 'Canada', code: 'ca' },
    { name: 'Costa Rica', code: 'cr' },
    { name: 'Cuba', code: 'cu' },
    { name: 'Dominica', code: 'dm' },
    { name: 'Dominican Republic', code: 'do' },
    { name: 'El Salvador', code: 'sv' },
    { name: 'Grenada', code: 'gd' },
    { name: 'Guatemala', code: 'gt' },
    { name: 'Haiti', code: 'ht' },
    { name: 'Honduras', code: 'hn' },
    { name: 'Jamaica', code: 'jm' },
    { name: 'Mexico', code: 'mx' },
    { name: 'Nicaragua', code: 'ni' },
    { name: 'Panama', code: 'pa' },
    { name: 'Saint Kitts and Nevis', code: 'kn' },
    { name: 'Saint Lucia', code: 'lc' },
    { name: 'Saint Vincent and the Grenadines', code: 'vc' },
    { name: 'Trinidad and Tobago', code: 'tt' },
    { name: 'United States', code: 'us' }
  ]
},
  {
  continent: 'South America',
  countries: [
    { name: 'Argentina', code: 'ar' },
    { name: 'Bolivia', code: 'bo' },
    { name: 'Brazil', code: 'br' },
    { name: 'Chile', code: 'cl' },
    { name: 'Colombia', code: 'co' },
    { name: 'Ecuador', code: 'ec' },
    { name: 'Guyana', code: 'gy' },
    { name: 'Paraguay', code: 'py' },
    { name: 'Peru', code: 'pe' },
    { name: 'Suriname', code: 'sr' },
    { name: 'Uruguay', code: 'uy' },
    { name: 'Venezuela', code: 've' }
  ]
},
{
  continent: 'Oceania',
  countries: [
    { name: 'Australia', code: 'au' },
    { name: 'Fiji', code: 'fj' },
    { name: 'Kiribati', code: 'ki' },
    { name: 'Marshall Islands', code: 'mh' },
    { name: 'Micronesia', code: 'fm' },
    { name: 'Nauru', code: 'nr' },
    { name: 'New Zealand', code: 'nz' },
    { name: 'Palau', code: 'pw' },
    { name: 'Papua New Guinea', code: 'pg' },
    { name: 'Samoa', code: 'ws' },
    { name: 'Solomon Islands', code: 'sb' },
    { name: 'Tonga', code: 'to' },
    { name: 'Tuvalu', code: 'tv' },
    { name: 'Vanuatu', code: 'vu' }
  ]
}
];


const CountryList = ({ selectedCountries, onCountrySelect }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCounts, setSelectedCounts] = useState([]);

  useEffect(() => {
    const counts = countriesByContinent.map((continent) => {
      const continentSelectedCountries = continent.countries.filter((country) =>
       selectedCountries.includes(country.name)
      );
      return continentSelectedCountries.length;
    });
    setSelectedCounts(counts);
  }, [selectedCountries]);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='country-list-container'>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <div className='country-list-tabs'>
          <TabList>
            {countriesByContinent.map((continent, index) => (
              <Tab key={continent.continent}>
                {continent.continent} ({selectedCounts[index]})
              </Tab>
            ))}
          </TabList>
        </div>

        {countriesByContinent.map((continent) => (
          <TabPanel key={continent.continent}>
            <ul className='country-list-panel'>
              {continent.countries.map((country) => (
                <Country
                  key={country.name}
                  country={country.name}
                  flag={country.code}
                  onSelect={onCountrySelect}
                />
              ))}
            </ul>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default CountryList;
