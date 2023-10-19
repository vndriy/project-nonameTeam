import someImg1 from '../img/supportUkraine/save-the-children@1x.png';
import someImg1_2x from '../img/supportUkraine/save-the-children@2x.png';
import someImg2 from '../img/supportUkraine/project-hope@1x.png';
import someImg2_2x from '../img/supportUkraine/project-hope@2x.png';
import someImg3 from '../img/supportUkraine/united24@1x.png';
import someImg3_2x from '../img/supportUkraine/united24@2x.png';
import someImg4 from '../img/supportUkraine/intern-med@1x.png'
import someImg4_2x from '../img/supportUkraine/intern-med@2x.png';
import someImg5 from '../img/supportUkraine/med-sans@1x.png';
import someImg5_2x from '../img/supportUkraine/med-sans@2x.png'
import someImg6 from '../img/supportUkraine/razom@1x.png';
import someImg6_2x from '../img/supportUkraine/razom@2x.png';
import someImg7 from '../img/supportUkraine/action-against@1x.png';
import someImg7_2x from '../img/supportUkraine/action-against@2x.png'
import someImg8 from '../img/supportUkraine/world-vision@1x.png';
import someImg8_2x from '../img/supportUkraine/world-vision@2x.png';
import someImg9 from '../img/supportUkraine/prytula@1x.png';
import someImg9_2x from '../img/supportUkraine/prytula@2x.png';

const supportArr = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: someImg1,
    img2x: someImg1_2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: someImg2,
    img2x: someImg2_2x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: someImg4,
    img2x: someImg4_2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: someImg6,
    img2x: someImg6_2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: someImg7,
    img2x: someImg7_2x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: someImg9,
    img2x: someImg9_2x,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: someImg5,
    img2x: someImg5_2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: someImg8,
    img2x: someImg8_2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: someImg3,
    img2x: someImg3_2x,
  },
]

export function getImgRetina(supportArr) {
  const isRetinaImg = window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches;
  const getImg = isRetinaImg ? supportArr.img2x : supportArr.img;
  return getImg;
}

export { supportArr }; 