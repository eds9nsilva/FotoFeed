import instance from '@/Services'
import { ResponseData } from '@/Services/Types/Photos'
import { Filter } from '../Types/Filters'

const data = {
  page: 1,
  per_page: 15,
  photos: [
    {
      id: 15567416,
      width: 3024,
      height: 4032,
      url: 'https://www.pexels.com/photo/city-restaurant-vacation-people-15567416/',
      photographer: 'Eugenia Remark',
      photographer_url: 'https://www.pexels.com/@eugenia-remark-5767088',
      photographer_id: 5767088,
      avg_color: '#847B72',
      src: {
        original:
          'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg',
        large2x:
          'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15567416/pexels-photo-15567416.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: '',
    },
    {
      id: 15443851,
      width: 2040,
      height: 2475,
      url: 'https://www.pexels.com/photo/circular-photo-of-a-rock-beach-15443851/',
      photographer: 'Lisa Fotios',
      photographer_url: 'https://www.pexels.com/@fotios-photos',
      photographer_id: 26735,
      avg_color: '#BEB4B5',
      src: {
        original:
          'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg',
        large2x:
          'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15443851/pexels-photo-15443851.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Free stock photo of polaroid',
    },
    {
      id: 15436366,
      width: 3649,
      height: 5444,
      url: 'https://www.pexels.com/photo/portrait-of-a-man-15436366/',
      photographer: 'Elena Rubtsova',
      photographer_url: 'https://www.pexels.com/@elenarubtso',
      photographer_id: 177083790,
      avg_color: '#837D7F',
      src: {
        original:
          'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg',
        large2x:
          'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15436366/pexels-photo-15436366.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'sweet boy ',
    },
    {
      id: 15434796,
      width: 2984,
      height: 3979,
      url: 'https://www.pexels.com/photo/saying-in-a-frame-15434796/',
      photographer: 'Lisa Fotios',
      photographer_url: 'https://www.pexels.com/@fotios-photos',
      photographer_id: 26735,
      avg_color: '#BBB4AE',
      src: {
        original:
          'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg',
        large2x:
          'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15434796/pexels-photo-15434796.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: '',
    },
    {
      id: 15426268,
      width: 3458,
      height: 4841,
      url: 'https://www.pexels.com/photo/woman-in-hat-standing-in-desert-landscape-15426268/',
      photographer: 'Carlo Obrien',
      photographer_url: 'https://www.pexels.com/@carlo-obrien-402486657',
      photographer_id: 402486657,
      avg_color: '#8C6A60',
      src: {
        original:
          'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg',
        large2x:
          'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15426268/pexels-photo-15426268.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: '',
    },
    {
      id: 15545455,
      width: 3069,
      height: 4297,
      url: 'https://www.pexels.com/photo/city-road-traffic-people-15545455/',
      photographer: 'Carlo Obrien',
      photographer_url: 'https://www.pexels.com/@carlo-obrien-402486657',
      photographer_id: 402486657,
      avg_color: '#A7957F',
      src: {
        original:
          'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg',
        large2x:
          'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15545455/pexels-photo-15545455.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: '',
    },
    {
      id: 15521516,
      width: 3356,
      height: 4698,
      url: 'https://www.pexels.com/photo/pub-in-london-15521516/',
      photographer: 'Artūras Kokorevas',
      photographer_url: 'https://www.pexels.com/@nematytaskadras',
      photographer_id: 26708,
      avg_color: '#343128',
      src: {
        original:
          'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg',
        large2x:
          'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15521516/pexels-photo-15521516.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Pub in London',
    },
    {
      id: 15520856,
      width: 3395,
      height: 4753,
      url: 'https://www.pexels.com/photo/london-streets-15520856/',
      photographer: 'Artūras Kokorevas',
      photographer_url: 'https://www.pexels.com/@nematytaskadras',
      photographer_id: 26708,
      avg_color: '#5F5F5F',
      src: {
        original:
          'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg',
        large2x:
          'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15520856/pexels-photo-15520856.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'London streets',
    },
    {
      id: 15507817,
      width: 4160,
      height: 6240,
      url: 'https://www.pexels.com/photo/handwritten-dirty-sign-wall-15507817/',
      photographer: 'Işıl Agc',
      photographer_url: 'https://www.pexels.com/@imagescosy',
      photographer_id: 53441892,
      avg_color: '#7F6E64',
      src: {
        original:
          'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg',
        large2x:
          'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15507817/pexels-photo-15507817.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: '',
    },
    {
      id: 15418150,
      width: 3888,
      height: 5184,
      url: 'https://www.pexels.com/photo/close-up-of-flowers-earring-15418150/',
      photographer: 'Lisa Fotios',
      photographer_url: 'https://www.pexels.com/@fotios-photos',
      photographer_id: 26735,
      avg_color: '#6C6258',
      src: {
        original:
          'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg',
        large2x:
          'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15418150/pexels-photo-15418150.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Free stock photo of earring, fashion, jewellery',
    },
    {
      id: 13282876,
      width: 3456,
      height: 5184,
      url: 'https://www.pexels.com/photo/the-picture-is-missing-13282876/',
      photographer: 'Kássia Melo',
      photographer_url: 'https://www.pexels.com/@kassiamelox',
      photographer_id: 100707831,
      avg_color: '#25201A',
      src: {
        original:
          'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg',
        large2x:
          'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/13282876/pexels-photo-13282876.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Olhar.',
    },
    {
      id: 13279267,
      width: 4016,
      height: 6016,
      url: 'https://www.pexels.com/photo/woman-with-curly-hair-13279267/',
      photographer: 'Vladislav Nahorny',
      photographer_url: 'https://www.pexels.com/@vladislav-nahorny-171529149',
      photographer_id: 171529149,
      avg_color: '#7A4F3F',
      src: {
        original:
          'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg',
        large2x:
          'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/13279267/pexels-photo-13279267.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Woman in Grey Leather Jacket',
    },
    {
      id: 15505145,
      width: 3024,
      height: 4032,
      url: 'https://www.pexels.com/photo/landscape-fashion-man-people-15505145/',
      photographer: 'Victor Chijioke',
      photographer_url: 'https://www.pexels.com/@victor-chijioke-350220031',
      photographer_id: 350220031,
      avg_color: '#A6ABA7',
      src: {
        original:
          'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg',
        large2x:
          'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15505145/pexels-photo-15505145.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: 'Free stock photo of adult, business, fashion',
    },
    {
      id: 15414190,
      width: 2397,
      height: 3224,
      url: 'https://www.pexels.com/photo/woman-and-man-together-looking-in-eyes-15414190/',
      photographer: 'Eugenia Remark',
      photographer_url: 'https://www.pexels.com/@eugenia-remark-5767088',
      photographer_id: 5767088,
      avg_color: '#B8B1AB',
      src: {
        original:
          'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg',
        large2x:
          'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15414190/pexels-photo-15414190.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: '',
    },
    {
      id: 15409085,
      width: 4000,
      height: 6000,
      url: 'https://www.pexels.com/photo/woman-in-blue-light-near-glass-15409085/',
      photographer: 'The Earthy Jay',
      photographer_url: 'https://www.pexels.com/@the-earthy-jay-380084919',
      photographer_id: 380084919,
      avg_color: '#0A1229',
      src: {
        original:
          'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg',
        large2x:
          'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large:
          'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium:
          'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg?auto=compress&cs=tinysrgb&h=350',
        small:
          'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
          'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
          'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/15409085/pexels-photo-15409085.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
      },
      liked: false,
      alt: '',
    },
  ],
  total_results: 8000,
  next_page: 'https://api.pexels.com/v1/curated/?page=2&per_page=15',
}
export const getPhotos = async (payload: Filter) => {
  try {
    const res = await instance.get<ResponseData>(
      `/photos?page=${payload.page}`,
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const searchPhotos = async (payload: Filter) => {
  try {
    const res = await instance.get(`/search?query=nature&per_page=1`) // search?query=nature
    console.log(res)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
