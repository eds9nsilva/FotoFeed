import instance from '@/Services'
import { UnsplashImage } from '@/Services/Types/Photos'
import { Filter } from '../Types/Filters'

const data = [
  {
    id: 'vsvHVibo9Hg',
    created_at: '2023-02-23T08:43:58Z',
    updated_at: '2023-02-23T13:00:01Z',
    promoted_at: '2023-02-23T13:00:01Z',
    width: 4000,
    height: 5000,
    color: '#264040',
    blur_hash: 'L68g:39G0gROE0xtNHNG0K%Lv}oz',
    description: null,
    alt_description: 'a woman sitting on the ground in a dress',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677141216267-fab8433a646d?ixid=Mnw0MTM5MjN8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677141216267-fab8433a646d?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677141216267-fab8433a646d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677141216267-fab8433a646d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677141216267-fab8433a646d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677141216267-fab8433a646d',
    },
    links: {
      self: 'https://api.unsplash.com/photos/vsvHVibo9Hg',
      html: 'https://unsplash.com/photos/vsvHVibo9Hg',
      download:
        'https://unsplash.com/photos/vsvHVibo9Hg/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/vsvHVibo9Hg/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwxfHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 1,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'YUNgvDuQqOg',
      updated_at: '2023-02-23T13:00:02Z',
      username: 'aceafel',
      name: 'Polina Shirokova',
      first_name: 'Polina',
      last_name: 'Shirokova',
      twitter_username: null,
      portfolio_url: 'https://instagram.com/linaphotospb?utm_medium=copy_link',
      bio: null,
      location: 'Saint-Petersburg ',
      links: {
        self: 'https://api.unsplash.com/users/aceafel',
        html: 'https://unsplash.com/@aceafel',
        photos: 'https://api.unsplash.com/users/aceafel/photos',
        likes: 'https://api.unsplash.com/users/aceafel/likes',
        portfolio: 'https://api.unsplash.com/users/aceafel/portfolio',
        following: 'https://api.unsplash.com/users/aceafel/following',
        followers: 'https://api.unsplash.com/users/aceafel/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1677040346359-135b1d6d24a9?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1677040346359-135b1d6d24a9?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1677040346359-135b1d6d24a9?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'linaphotospb',
      total_collections: 0,
      total_likes: 0,
      total_photos: 64,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'linaphotospb',
        portfolio_url:
          'https://instagram.com/linaphotospb?utm_medium=copy_link',
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'yEIrpmnHd2g',
    created_at: '2023-02-23T09:07:43Z',
    updated_at: '2023-02-23T12:56:01Z',
    promoted_at: '2023-02-23T12:56:01Z',
    width: 5963,
    height: 3975,
    color: '#d9a673',
    blur_hash: 'L9Nu;1M{0M%L?Et6V[RjIqxtbFWB',
    description: 'Egypt.',
    alt_description: 'a wall with egyptian writing on it',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677142967841-cce85eb3b76b?ixid=Mnw0MTM5MjN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677142967841-cce85eb3b76b?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677142967841-cce85eb3b76b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677142967841-cce85eb3b76b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677142967841-cce85eb3b76b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677142967841-cce85eb3b76b',
    },
    links: {
      self: 'https://api.unsplash.com/photos/yEIrpmnHd2g',
      html: 'https://unsplash.com/photos/yEIrpmnHd2g',
      download:
        'https://unsplash.com/photos/yEIrpmnHd2g/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/yEIrpmnHd2g/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 0,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'hoNLcp2tvuU',
      updated_at: '2023-02-23T12:56:02Z',
      username: 'axpphotography',
      name: 'AXP Photography',
      first_name: 'AXP',
      last_name: 'Photography',
      twitter_username: 'AXP_Photography',
      portfolio_url: null,
      bio: 'Hello !',
      location: 'Luxembourg',
      links: {
        self: 'https://api.unsplash.com/users/axpphotography',
        html: 'https://unsplash.com/it/@axpphotography',
        photos: 'https://api.unsplash.com/users/axpphotography/photos',
        likes: 'https://api.unsplash.com/users/axpphotography/likes',
        portfolio: 'https://api.unsplash.com/users/axpphotography/portfolio',
        following: 'https://api.unsplash.com/users/axpphotography/following',
        followers: 'https://api.unsplash.com/users/axpphotography/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1655673500590-96da92344ffeimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1655673500590-96da92344ffeimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1655673500590-96da92344ffeimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: null,
      total_collections: 27,
      total_likes: 38,
      total_photos: 1330,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: 'AXP_Photography',
        paypal_email: null,
      },
    },
  },
  {
    id: 'RvOv1spqF14',
    created_at: '2023-02-23T09:33:33Z',
    updated_at: '2023-02-23T12:48:01Z',
    promoted_at: '2023-02-23T12:48:01Z',
    width: 6400,
    height: 5120,
    color: '#262626',
    blur_hash: 'L34LE]Vs0egOxtjsM|W;56t8=|RP',
    description: null,
    alt_description: 'a man in a suit adjusting his shirt',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677144693236-e70105f78fe8?ixid=Mnw0MTM5MjN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677144693236-e70105f78fe8?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677144693236-e70105f78fe8?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677144693236-e70105f78fe8?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677144693236-e70105f78fe8?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677144693236-e70105f78fe8',
    },
    links: {
      self: 'https://api.unsplash.com/photos/RvOv1spqF14',
      html: 'https://unsplash.com/photos/RvOv1spqF14',
      download:
        'https://unsplash.com/photos/RvOv1spqF14/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/RvOv1spqF14/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 0,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'NnvzCv7bJBw',
      updated_at: '2023-02-23T12:49:09Z',
      username: 'rubenev520',
      name: 'Ruben Valenzuela',
      first_name: 'Ruben',
      last_name: 'Valenzuela',
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: 'Los Angeles, CA',
      links: {
        self: 'https://api.unsplash.com/users/rubenev520',
        html: 'https://unsplash.com/@rubenev520',
        photos: 'https://api.unsplash.com/users/rubenev520/photos',
        likes: 'https://api.unsplash.com/users/rubenev520/likes',
        portfolio: 'https://api.unsplash.com/users/rubenev520/portfolio',
        following: 'https://api.unsplash.com/users/rubenev520/following',
        followers: 'https://api.unsplash.com/users/rubenev520/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1651857817013-a830e3f798d1?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1651857817013-a830e3f798d1?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1651857817013-a830e3f798d1?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'Ruben_Valenzuela_Media',
      total_collections: 1,
      total_likes: 156,
      total_photos: 132,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'Ruben_Valenzuela_Media',
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'kh-7fOxQtZg',
    created_at: '2023-02-23T09:44:11Z',
    updated_at: '2023-02-23T12:40:01Z',
    promoted_at: '2023-02-23T12:40:01Z',
    width: 5504,
    height: 8256,
    color: '#262626',
    blur_hash: 'L57A}7oJ02x[-;RjRQ%2D+M|%Lt7',
    description: 'Tunnel of Trees',
    alt_description: 'an empty street lined with trees and bushes',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677145406902-4228ceed23f4?ixid=Mnw0MTM5MjN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677145406902-4228ceed23f4?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677145406902-4228ceed23f4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677145406902-4228ceed23f4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677145406902-4228ceed23f4?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677145406902-4228ceed23f4',
    },
    links: {
      self: 'https://api.unsplash.com/photos/kh-7fOxQtZg',
      html: 'https://unsplash.com/photos/kh-7fOxQtZg',
      download:
        'https://unsplash.com/photos/kh-7fOxQtZg/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/kh-7fOxQtZg/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 4,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'PvjW2sBV594',
      updated_at: '2023-02-23T12:44:08Z',
      username: 'timmossholder',
      name: 'Tim Mossholder',
      first_name: 'Tim',
      last_name: 'Mossholder',
      twitter_username: 'TimMossholder',
      portfolio_url: 'http://timmossholder.com',
      bio: 'I’m located on the Central Coast of California, and always on the lookout for something interesting to capture. Connect on Instagram @timmossholder or at timmossholder.com for photo projects or prints. ',
      location: 'Santa Maria',
      links: {
        self: 'https://api.unsplash.com/users/timmossholder',
        html: 'https://unsplash.com/@timmossholder',
        photos: 'https://api.unsplash.com/users/timmossholder/photos',
        likes: 'https://api.unsplash.com/users/timmossholder/likes',
        portfolio: 'https://api.unsplash.com/users/timmossholder/portfolio',
        following: 'https://api.unsplash.com/users/timmossholder/following',
        followers: 'https://api.unsplash.com/users/timmossholder/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1474504186457-d0b36ed789fb?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1474504186457-d0b36ed789fb?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1474504186457-d0b36ed789fb?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'timmossholder',
      total_collections: 37,
      total_likes: 4973,
      total_photos: 2121,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'timmossholder',
        portfolio_url: 'http://timmossholder.com',
        twitter_username: 'TimMossholder',
        paypal_email: null,
      },
    },
  },
  {
    id: 'Ombkz7Mw9h8',
    created_at: '2023-02-22T14:43:19Z',
    updated_at: '2023-02-23T12:32:02Z',
    promoted_at: '2023-02-23T12:32:02Z',
    width: 3347,
    height: 4458,
    color: '#404026',
    blur_hash: 'LQGkzLx]EnWX0gD%=^M{V@IU%1WB',
    description: null,
    alt_description: 'a yellow door in a white wall surrounded by trees',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677076926621-bdb17d504568?ixid=Mnw0MTM5MjN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677076926621-bdb17d504568?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677076926621-bdb17d504568?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677076926621-bdb17d504568?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677076926621-bdb17d504568?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677076926621-bdb17d504568',
    },
    links: {
      self: 'https://api.unsplash.com/photos/Ombkz7Mw9h8',
      html: 'https://unsplash.com/photos/Ombkz7Mw9h8',
      download:
        'https://unsplash.com/photos/Ombkz7Mw9h8/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/Ombkz7Mw9h8/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 4,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: '2i6fcrJQciw',
      updated_at: '2023-02-23T12:44:41Z',
      username: 'rylomedia',
      name: 'Ryan Loughlin',
      first_name: 'Ryan',
      last_name: 'Loughlin',
      twitter_username: 'Rylo444',
      portfolio_url: null,
      bio: null,
      location: 'New Jersey',
      links: {
        self: 'https://api.unsplash.com/users/rylomedia',
        html: 'https://unsplash.com/@rylomedia',
        photos: 'https://api.unsplash.com/users/rylomedia/photos',
        likes: 'https://api.unsplash.com/users/rylomedia/likes',
        portfolio: 'https://api.unsplash.com/users/rylomedia/portfolio',
        following: 'https://api.unsplash.com/users/rylomedia/following',
        followers: 'https://api.unsplash.com/users/rylomedia/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1626399243934-2dd490f06b68image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1626399243934-2dd490f06b68image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1626399243934-2dd490f06b68image?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'Rylo444',
      total_collections: 1,
      total_likes: 95,
      total_photos: 130,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'Rylo444',
        portfolio_url: null,
        twitter_username: 'Rylo444',
        paypal_email: null,
      },
    },
  },
  {
    id: '4YeNM8QH6G0',
    created_at: '2023-02-20T14:10:06Z',
    updated_at: '2023-02-23T12:24:01Z',
    promoted_at: '2023-02-23T12:24:01Z',
    width: 6000,
    height: 4000,
    color: '#262626',
    blur_hash: 'LZFFmZj?00WB_3of9FWBtRofRPjs',
    description: null,
    alt_description: 'looking up at two tall buildings with windows',
    urls: {
      raw: 'https://images.unsplash.com/photo-1676902188319-fdc4df01998c?ixid=Mnw0MTM5MjN8MHwxfGFsbHw2fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1676902188319-fdc4df01998c?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw2fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1676902188319-fdc4df01998c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw2fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1676902188319-fdc4df01998c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw2fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1676902188319-fdc4df01998c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw2fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1676902188319-fdc4df01998c',
    },
    links: {
      self: 'https://api.unsplash.com/photos/4YeNM8QH6G0',
      html: 'https://unsplash.com/photos/4YeNM8QH6G0',
      download:
        'https://unsplash.com/photos/4YeNM8QH6G0/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw2fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/4YeNM8QH6G0/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw2fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 2,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'bi-CRWzotJw',
      updated_at: '2023-02-23T12:44:40Z',
      username: 'cola1234',
      name: 'Song Yi',
      first_name: 'Song',
      last_name: 'Yi',
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/cola1234',
        html: 'https://unsplash.com/@cola1234',
        photos: 'https://api.unsplash.com/users/cola1234/photos',
        likes: 'https://api.unsplash.com/users/cola1234/likes',
        portfolio: 'https://api.unsplash.com/users/cola1234/portfolio',
        following: 'https://api.unsplash.com/users/cola1234/following',
        followers: 'https://api.unsplash.com/users/cola1234/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1663691775186-ab889e55ce7e?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1663691775186-ab889e55ce7e?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1663691775186-ab889e55ce7e?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 85,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'FGYQw9hri68',
    created_at: '2023-02-22T20:07:15Z',
    updated_at: '2023-02-23T12:16:01Z',
    promoted_at: '2023-02-23T12:16:01Z',
    width: 4920,
    height: 7376,
    color: '#d9d9d9',
    blur_hash: 'L+F?FQWBWBju~qa{WBj[-;ofayj[',
    description: null,
    alt_description: 'a view of a lush green mountain range',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677096323958-e33c517bc807?ixid=Mnw0MTM5MjN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677096323958-e33c517bc807?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677096323958-e33c517bc807?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677096323958-e33c517bc807?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677096323958-e33c517bc807?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677096323958-e33c517bc807',
    },
    links: {
      self: 'https://api.unsplash.com/photos/FGYQw9hri68',
      html: 'https://unsplash.com/photos/FGYQw9hri68',
      download:
        'https://unsplash.com/photos/FGYQw9hri68/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/FGYQw9hri68/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 6,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'IJ0pD_pExUc',
      updated_at: '2023-02-23T12:43:36Z',
      username: 'weekendtripcreator',
      name: 'Lisha Riabinina',
      first_name: 'Lisha',
      last_name: 'Riabinina',
      twitter_username: null,
      portfolio_url: 'https://weekendtripcreator.com',
      bio: "Always up for an adventure! Let's explore together!\r\n",
      location: 'Long Beach',
      links: {
        self: 'https://api.unsplash.com/users/weekendtripcreator',
        html: 'https://unsplash.com/@weekendtripcreator',
        photos: 'https://api.unsplash.com/users/weekendtripcreator/photos',
        likes: 'https://api.unsplash.com/users/weekendtripcreator/likes',
        portfolio:
          'https://api.unsplash.com/users/weekendtripcreator/portfolio',
        following:
          'https://api.unsplash.com/users/weekendtripcreator/following',
        followers:
          'https://api.unsplash.com/users/weekendtripcreator/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1652904643995-6cb9e96399ecimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1652904643995-6cb9e96399ecimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1652904643995-6cb9e96399ecimage?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'weekendtripcreator',
      total_collections: 3,
      total_likes: 30,
      total_photos: 318,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'weekendtripcreator',
        portfolio_url: 'https://weekendtripcreator.com',
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'uhvj7Svm5ww',
    created_at: '2023-02-21T05:59:50Z',
    updated_at: '2023-02-23T12:08:01Z',
    promoted_at: '2023-02-23T12:08:01Z',
    width: 4599,
    height: 6891,
    color: '#c0a6a6',
    blur_hash: 'LGK,?T~qIpofv#D%xaa}S$t7j[Rj',
    description: null,
    alt_description: 'a bouquet of flowers sitting on top of a pink table',
    urls: {
      raw: 'https://images.unsplash.com/photo-1676959138360-5a71e77d9ecf?ixid=Mnw0MTM5MjN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1676959138360-5a71e77d9ecf?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1676959138360-5a71e77d9ecf?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1676959138360-5a71e77d9ecf?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1676959138360-5a71e77d9ecf?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1676959138360-5a71e77d9ecf',
    },
    links: {
      self: 'https://api.unsplash.com/photos/uhvj7Svm5ww',
      html: 'https://unsplash.com/photos/uhvj7Svm5ww',
      download:
        'https://unsplash.com/photos/uhvj7Svm5ww/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/uhvj7Svm5ww/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 8,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: '5fTGJB0n4WM',
      updated_at: '2023-02-23T12:43:38Z',
      username: 'anitaaustvika',
      name: 'Anita Austvika',
      first_name: 'Anita',
      last_name: 'Austvika',
      twitter_username: null,
      portfolio_url: 'https://www.instagram.com/rareflower_photography/',
      bio: 'Photographer',
      location: 'Latvia',
      links: {
        self: 'https://api.unsplash.com/users/anitaaustvika',
        html: 'https://unsplash.com/@anitaaustvika',
        photos: 'https://api.unsplash.com/users/anitaaustvika/photos',
        likes: 'https://api.unsplash.com/users/anitaaustvika/likes',
        portfolio: 'https://api.unsplash.com/users/anitaaustvika/portfolio',
        following: 'https://api.unsplash.com/users/anitaaustvika/following',
        followers: 'https://api.unsplash.com/users/anitaaustvika/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-fb-1667059013-dcd9c03ca00b.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-fb-1667059013-dcd9c03ca00b.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-fb-1667059013-dcd9c03ca00b.jpg?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'rareflower_photography',
      total_collections: 0,
      total_likes: 8,
      total_photos: 2642,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: 'rareflower_photography',
        portfolio_url: 'https://www.instagram.com/rareflower_photography/',
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'QyXIY0d76LA',
    created_at: '2023-02-22T21:23:55Z',
    updated_at: '2023-02-23T12:00:02Z',
    promoted_at: '2023-02-23T12:00:02Z',
    width: 3444,
    height: 2583,
    color: '#f3f3f3',
    blur_hash: 'L~L52dR*fQay~qWVazj[IUj[ayj[',
    description: null,
    alt_description: 'a bird flying over a snow covered mountain range',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677101030381-2c5b13084c0e?ixid=Mnw0MTM5MjN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677101030381-2c5b13084c0e?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677101030381-2c5b13084c0e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677101030381-2c5b13084c0e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677101030381-2c5b13084c0e?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3NzE1NzI2Mg\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677101030381-2c5b13084c0e',
    },
    links: {
      self: 'https://api.unsplash.com/photos/QyXIY0d76LA',
      html: 'https://unsplash.com/photos/QyXIY0d76LA',
      download:
        'https://unsplash.com/photos/QyXIY0d76LA/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
      download_location:
        'https://api.unsplash.com/photos/QyXIY0d76LA/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY3NzE1NzI2Mg',
    },
    likes: 3,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'RefBaWUubSA',
      updated_at: '2023-02-23T12:44:46Z',
      username: 'tom__rmn',
      name: 'Tom Ramain',
      first_name: 'Tom',
      last_name: 'Ramain',
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/tom__rmn',
        html: 'https://unsplash.com/@tom__rmn',
        photos: 'https://api.unsplash.com/users/tom__rmn/photos',
        likes: 'https://api.unsplash.com/users/tom__rmn/likes',
        portfolio: 'https://api.unsplash.com/users/tom__rmn/portfolio',
        following: 'https://api.unsplash.com/users/tom__rmn/following',
        followers: 'https://api.unsplash.com/users/tom__rmn/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1654616125922-4b4b6486fec2?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1654616125922-4b4b6486fec2?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1654616125922-4b4b6486fec2?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 48,
      total_photos: 22,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
  },
  {
    id: 'stNbOPh_DVg',
    created_at: '2023-02-22T17:35:16Z',
    updated_at: '2023-02-23T11:56:01Z',
    promoted_at: '2023-02-23T11:56:01Z',
    width: 5304,
    height: 7952,
    color: '#262626',
    blur_hash: 'L99$tM5S9]s.EgoKjtso0#$%-TWC',
    description: null,
    alt_description: 'a close up of a plant with leaves',
    urls: {
      raw: 'https://images.unsplash.com/photo-1677087310219-830674408e25?ixid=Mnw0MTM5MjN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzcxNTcyNjI\u0026ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1677087310219-830674408e25?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzcxNTcyNjI\u0026ixlib=rb-4.0.3\u0026q=80',
      regular:
        'https://images.unsplash.com/photo-1677087310219-830674408e25?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzcxNTcyNjI\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
      small:
        'https://images.unsplash.com/photo-1677087310219-830674408e25?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzcxNTcyNjI\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400',
      thumb:
        'https://images.unsplash.com/photo-1677087310219-830674408e25?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=Mnw0MTM5MjN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzcxNTcyNjI\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=200',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677087310219-830674408e25',
    },
    links: {
      self: 'https://api.unsplash.com/photos/stNbOPh_DVg',
      html: 'https://unsplash.com/photos/stNbOPh_DVg',
      download:
        'https://unsplash.com/photos/stNbOPh_DVg/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzcxNTcyNjI',
      download_location:
        'https://api.unsplash.com/photos/stNbOPh_DVg/download?ixid=Mnw0MTM5MjN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NzcxNTcyNjI',
    },
    likes: 11,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: 'eVDeFzcskbk',
      updated_at: '2023-02-23T12:44:48Z',
      username: 'colemangloverphotography',
      name: 'Coleman Glover',
      first_name: 'Coleman',
      last_name: 'Glover',
      twitter_username: 'GloverColeman',
      portfolio_url: 'https://colemangloverphotography.com',
      bio: "I'm a photographer based out of Bolivar, TN. Feel free to contact me @colemangphoto Photo Credits would be appreciated ",
      location: 'Bolivar TN',
      links: {
        self: 'https://api.unsplash.com/users/colemangloverphotography',
        html: 'https://unsplash.com/@colemangloverphotography',
        photos:
          'https://api.unsplash.com/users/colemangloverphotography/photos',
        likes: 'https://api.unsplash.com/users/colemangloverphotography/likes',
        portfolio:
          'https://api.unsplash.com/users/colemangloverphotography/portfolio',
        following:
          'https://api.unsplash.com/users/colemangloverphotography/following',
        followers:
          'https://api.unsplash.com/users/colemangloverphotography/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1668701723148-acfabe952f56?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32',
        medium:
          'https://images.unsplash.com/profile-1668701723148-acfabe952f56?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64',
        large:
          'https://images.unsplash.com/profile-1668701723148-acfabe952f56?ixlib=rb-4.0.3\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128',
      },
      instagram_username: 'thecolemanglover',
      total_collections: 3,
      total_likes: 153,
      total_photos: 202,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: 'thecolemanglover',
        portfolio_url: 'https://colemangloverphotography.com',
        twitter_username: 'GloverColeman',
        paypal_email: null,
      },
    },
  },
]
export const getPhotos = async (payload: Filter) => {
  try {
    // const res = await instance.get<UnsplashImage[]>(`/photos?page=${payload.page}`)
    return data
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
