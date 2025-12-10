const resorts = [
  {
    id: 'suginohara',
    name: '妙高杉之原',
    englishName: 'Myoko Suginohara',
    area: '上越妙高 · 新潟',
    verticalDrop: '1,124 m（1,855 → 731 m）',
    elevations: '山顶 1,855 m / 山底 731 m',
    drive: '距上越妙高 20–30 分钟',
    snowStat: '妙高 Powder Belt · 年均降雪 13m+',
    mapImage: 'assets/妙高衫原雪场地图.png',
    mapLink: 'assets/妙高衫原雪场地图.pdf',
    weatherLink: 'https://www.windy.com/36.90/138.17?36.90,138.17,11',
    snowLink: 'https://www.snow-forecast.com/resorts/Myoko-Suginohara/6day/mid',
    navLink: 'https://www.google.com/maps/search/?api=1&query=36.90,138.17',
    coordinates: [36.90, 138.17],
    highlights: [
      '8.5 km 长距离巡航道，缆车线设计友好',
      'Gondola 顶部常保留粉雪，视野可眺望日本海',
    ],
  },
  {
    id: 'arai',
    name: '新井 LOTTE ARAI Resort',
    englishName: 'LOTTE Arai Resort',
    area: '上越妙高 · 新潟',
    verticalDrop: '951 m（1,280 → 329 m）',
    elevations: '山顶 1,280 m / 山底 329 m',
    drive: '距上越妙高 25–30 分钟',
    snowStat: '北向雪坡 · 年均降雪 15m',
    mapImage: 'assets/新井乐天地图.png',
    mapLink: 'assets/新井乐天地图.pdf',
    weatherLink: 'https://www.windy.com/37.02/138.20?37.02,138.20,11',
    snowLink: 'https://www.snow-forecast.com/resorts/LOTTE-Arai-Resort/6day/mid',
    navLink: 'https://www.google.com/maps/search/?api=1&query=37.02,138.20',
    coordinates: [37.02, 138.2],
    highlights: [
      '多条官方开放自由滑区（Adventure Zones）',
      '度假村配套完善，适合住场刷雪',
    ],
  },
  {
    id: 'nozawa',
    name: '野泽温泉',
    englishName: 'Nozawa Onsen',
    area: '长野北部 · 传统温泉村',
    verticalDrop: '1,085 m（1,650 → 565 m）',
    elevations: '山顶 1,650 m / 山底 565 m',
    drive: '距上越妙高 50–60 分钟',
    snowStat: '内陆型粉雪 · 年均 11m',
    mapImage: 'assets/野泽温泉地图.png',
    mapLink: 'assets/野泽温泉地图.pdf',
    weatherLink: 'https://www.windy.com/36.92/138.44?36.92,138.44,11',
    snowLink: 'https://www.snow-forecast.com/resorts/Nozawa-Onsen/6day/mid',
    navLink: 'https://www.google.com/maps/search/?api=1&query=36.92,138.44',
    coordinates: [36.92, 138.44],
    highlights: [
      '古老温泉街 + 夜生活，适合放松恢复',
      '山顶 Uenotaira 森林雪原适合压雪日',
    ],
  },
  {
    id: 'hakkaisan',
    name: '八海山',
    englishName: 'Hakkaisan Ski Resort',
    area: '南鱼沼 · 新潟',
    verticalDrop: '820 m（1,175 → 355 m）',
    elevations: '山顶 1,175 m / 山底 355 m',
    drive: '距妙高约 2 小时 · 距南鱼沼 20 分钟',
    snowStat: '缆车直达山顶 · 降雪稳定',
    mapImage: 'assets/八海山地图.jpg',
    mapLink: 'assets/八海山地图.jpg',
    weatherLink: 'https://www.windy.com/37.13/138.95?37.13,138.95,11',
    snowLink: 'https://www.snow-forecast.com/resorts/Hakkai-San/6day/mid',
    navLink: 'https://www.google.com/maps/search/?api=1&query=37.13,138.95',
    coordinates: [37.13, 138.95],
    highlights: [
      '3,300 m 长距离自上而下巡航',
      '缆车+猫跳区组合，适合高级练腿',
    ],
  },
];

const createMetaList = (resort) => {
  const items = [
    { label: '标高差', value: resort.verticalDrop },
    { label: '山顶 / 山底', value: resort.elevations },
    { label: '交通', value: resort.drive },
    { label: '雪况', value: resort.snowStat },
  ].filter((item) => Boolean(item.value));

  return items
    .map(
      (item) => `
      <div class="meta-item">
        <p class="label">${item.label}</p>
        <p class="value">${item.value}</p>
      </div>
    `
    )
    .join('');
};

const createMapPreview = (resort) => {
  if (resort.mapImage) {
    return `
      <figure class="map-preview">
        <img src="${resort.mapImage}" alt="${resort.name} 雪道图" loading="lazy" />
      </figure>
    `;
  }

  return `
    <div class="map-preview">
      <div class="placeholder">暂无本地预览，点击下方“雪道图”查看官网高清版本</div>
    </div>
  `;
};

const createHighlights = (resort) =>
  resort.highlights
    .map((text) => `<li>${text}</li>`)
    .join('');

const createLinks = (resort) => `
  <div class="links">
    <a href="${resort.mapLink}" target="_blank" rel="noopener noreferrer">雪道图</a>
    <a href="${resort.weatherLink}" target="_blank" rel="noopener noreferrer">天气（Windy）</a>
    <a href="${resort.snowLink}" target="_blank" rel="noopener noreferrer">Snow-Forecast</a>
    <a href="${resort.navLink}" target="_blank" rel="noopener noreferrer">Google Maps</a>
  </div>
`;

const renderResorts = () => {
  const grid = document.getElementById('resort-grid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();

  resorts.forEach((resort) => {
    const card = document.createElement('article');
    card.className = 'resort-card';
    card.id = `card-${resort.id}`;
    card.innerHTML = `
      <header>
        <h3>${resort.name}</h3>
        <p class="subheading">${resort.englishName} · ${resort.area}</p>
      </header>
      <div class="meta-list">
        ${createMetaList(resort)}
      </div>
      ${createMapPreview(resort)}
      <ul class="highlights">
        ${createHighlights(resort)}
      </ul>
      ${createLinks(resort)}
    `;
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
};

document.addEventListener('DOMContentLoaded', () => {
  renderResorts();
});
