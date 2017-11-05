import { shallow } from 'vue-test-utils'
import VideoCard from '@/components/VideoCard'

describe('VideoCard component', () => {
  
  it('equals video.title', () => {
    const wrapper = shallow(VideoCard, {
      propsData: {
        video
      }
    })
    const titleWrapper = wrapper.find('.font-bold.text-xl.mb-2')
    expect(titleWrapper.text()).toEqual(video.snippet.title)
  })
  
  it('equals video', () => {
    const wrapper = shallow(VideoCard, {
      propsData: {
        video
      }
    })
    expect(wrapper.vm.video).toEqual(video)
  })

  it('has the expected html structure', () => {
    const wrapper = shallow(VideoCard, {
      propsData: {
        video
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

})

const video = {
  "kind": "youtube#video",
   "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/n2N0rAmCXSF7Bjsmv9-Ic5HLlgM\"",
   "id": "spkfIpPmPgs",
   "snippet": {
    "publishedAt": "2017-11-05T06:03:40.000Z",
    "channelId": "UCqFzWxSCi39LnW1JKFR3efg",
    "title": "Paul Manafort's House Cold Open - SNL",
    "description": "President Donald Trump (Alec Baldwin) checks in on Paul Manafort (Alex Moffat) and sends Melania Trump (Cecily Strong) to Asia in his place.\n\n#SNL #SNL43\n\nGet more SNL: http://www.nbc.com/saturday-night-live\nFull Episodes: http://www.nbc.com/saturday-night-liv...\n\nLike SNL: https://www.facebook.com/snl\nFollow SNL: https://twitter.com/nbcsnl\nSNL Tumblr: http://nbcsnl.tumblr.com/\nSNL Instagram: http://instagram.com/nbcsnl \nSNL Pinterest: http://www.pinterest.com/nbcsnl/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/spkfIpPmPgs/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/spkfIpPmPgs/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/spkfIpPmPgs/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/spkfIpPmPgs/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/spkfIpPmPgs/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "Saturday Night Live",
    "tags": [
     "SNL",
     "Saturday Night Live",
     "SNL Season 43",
     "Episode 1729",
     "Larry David",
     "Donald Trump",
     "Alec Baldwin",
     "Paul Manafort",
     "Alex Moffat",
     "Mike Pence",
     "Beck Bennett",
     "Jeff Sessions",
     "Kate McKinnon",
     "Melania Trump",
     "Cecily Strong",
     "season 43",
     "live",
     "new york",
     "comedy",
     "sketch",
     "funny",
     "hilarious",
     "late night",
     "host",
     "music",
     "guest",
     "laugh",
     "impersonation",
     "actor",
     "improv",
     "musician",
     "russia investigation",
     "rugs",
     "fake news",
     "s43",
     "s43e4",
     "episode 4",
     "Seinfeld",
     "Curb Your Enthusiasm"
    ],
    "categoryId": "24",
    "liveBroadcastContent": "none",
    "localized": {
     "title": "Paul Manafort's House Cold Open - SNL",
     "description": "President Donald Trump (Alec Baldwin) checks in on Paul Manafort (Alex Moffat) and sends Melania Trump (Cecily Strong) to Asia in his place.\n\n#SNL #SNL43\n\nGet more SNL: http://www.nbc.com/saturday-night-live\nFull Episodes: http://www.nbc.com/saturday-night-liv...\n\nLike SNL: https://www.facebook.com/snl\nFollow SNL: https://twitter.com/nbcsnl\nSNL Tumblr: http://nbcsnl.tumblr.com/\nSNL Instagram: http://instagram.com/nbcsnl \nSNL Pinterest: http://www.pinterest.com/nbcsnl/"
    },
    "defaultAudioLanguage": "en"
   },
   "contentDetails": {
    "duration": "PT5M20S",
    "dimension": "2d",
    "definition": "hd",
    "caption": "true",
    "licensedContent": true,
    "regionRestriction": {
     "blocked": [
      "TC",
      "LY",
      "TG",
      "TD",
      "LR",
      "LS",
      "TH",
      "TN",
      "TO",
      "TL",
      "TW",
      "TT",
      "LB",
      "LC",
      "LA",
      "BH",
      "DZ",
      "EH",
      "DE",
      "DJ",
      "DO",
      "DM",
      "SG",
      "SE",
      "SD",
      "SC",
      "KY",
      "KW",
      "SN",
      "SL",
      "KN",
      "KM",
      "SS",
      "SR",
      "KH",
      "KE",
      "SZ",
      "SY",
      "SX",
      "CW",
      "CV",
      "CR",
      "CY",
      "CG",
      "CF",
      "CA",
      "CO",
      "CM",
      "CL",
      "CK",
      "CI",
      "TZ",
      "RW",
      "BZ",
      "BR",
      "BS",
      "JM",
      "BW",
      "JP",
      "BI",
      "BJ",
      "BM",
      "BN",
      "BO",
      "BB",
      "BF",
      "QA",
      "JO",
      "ID",
      "ZW",
      "AU",
      "IL",
      "AW",
      "IN",
      "AS",
      "AR",
      "ZA",
      "AO",
      "IQ",
      "IS",
      "IR",
      "AE",
      "AD",
      "AG",
      "AF",
      "ZM",
      "PH",
      "PF",
      "PG",
      "PE",
      "PA",
      "MA",
      "PY",
      "PS",
      "HN",
      "HK",
      "YE",
      "HT",
      "OM",
      "GH",
      "GN",
      "GM",
      "GA",
      "GF",
      "GD",
      "GY",
      "GQ",
      "GP",
      "GT",
      "NZ",
      "NE",
      "NG",
      "NA",
      "NO",
      "NI",
      "FM",
      "SA",
      "EC",
      "SO",
      "AI",
      "FR",
      "MY",
      "MZ",
      "UG",
      "MQ",
      "MS",
      "MR",
      "MU",
      "MT",
      "MW",
      "MM",
      "ML",
      "MO",
      "MN",
      "UY",
      "MG",
      "ES",
      "ER",
      "ET",
      "SV",
      "VN",
      "EG",
      "VE",
      "VG",
      "VC"
     ]
    },
    "projection": "rectangular"
   },
   "statistics": {
    "viewCount": "187281",
    "likeCount": "7110",
    "dislikeCount": "785",
    "favoriteCount": "0",
    "commentCount": "1032"
   }
}
