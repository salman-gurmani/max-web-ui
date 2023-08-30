import BusBG from './Bus Simulator.jpg'

const GamesData = [
  {
    // image:
    //   'https://play-lh.googleusercontent.com/Gi9K9vYUDa5FK32m0G_M1PuYUONdcxBNKlTF8jYiQJ5yqYFEFJJZyfV2Ggk0pj-6NQ=w240-h480-rw',
    image: BusBG.src,
    name: 'Supercars Underground Racing',
    date: 'June 25, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.racing.car&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/e04wWaU7lTIXwu6hMoyv8qjuGSXm1bB6Sf5Pvsh4ZULzc42pyXT-PRz7BmdRvy5o3Q=w240-h480-rw',
    name: 'Real Taxi Driving : Grand City',
    date: 'Jan 26, 2016',
    link: 'https://play.google.com/store/apps/details?id=com.supersmashact.citytaxidriver3d&pcampaignid=web_share',
    platform: 'Unity',
  },

  {
    image:
      'https://play-lh.googleusercontent.com/K2g73mEOz7Sn8yuZiVOEgvZtoUtuO4bIDLJSQHJgGCAfS7QvH8XoPMEFHWDqXVrYfx8C=w240-h480-rw',
    name: 'Mega Ramps - Crazy Car Stunts',
    date: 'Feb 20, 2022',
    link: 'https://play.google.com/store/apps/details?id=com.mvgames.mega.ramps.extreme.race&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/9U8fSr8BHPOUpIG4irM_Kzd5MU68CAsE3bJlV5-gPX_zMftRNn4KFcgq83chDO4chZs=w240-h480-rw',
    name: 'Truck Simulator: Offroad 4x4',
    date: 'Sep 9, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.hilldrive&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/kuFMpdRUlvxWGqu9PQsPT2fHLErgJzBL-udZOB_KY4sTDqKG5EO5InFdzCMmkPGjF9t3=w240-h480-rw',
    name: 'REAL ESTATE Business Tycoon',
    date: 'Nov 25, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.realestate.simulation&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/bO2HKjYKalOlGWk0bXQzqvi2GrlDbfMlQ4GCN5WIWvJH0SIyd9SygMUDSbJlt_ysbuQ=w240-h480-rw',
    name: 'Sniper Fury: One Shot Kill',
    date: 'May 21, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.sniper.shooter&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/SM9fBiYqq7TkFfCl9cA20YoMpmp8lTSwIlUb08WW6Sm5o555j3w8oTGDe00_zmUqzg=w240-h480-rw',
    name: 'Extreme Bike Stunt 2021: Crazy',
    date: 'Sep 28, 2020',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.bike.stunt&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/YLKS23TlJFfgNIXP0iet2Ga4EEElCb99eauT5dcv_q6WuKpa02g1da7rdmX7eldHJZA=w240-h480-rw',
    name: 'Modern Warfare: Gun Games',
    date: 'Mar 9, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.commando.secret.mission&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/LQaksusJAH5FhoQj-fAa_Z5eR7iZCJ__hL_05jH5Z3fYDDEx_gQRTJ7ecfZ8ab3UJUyd=w240-h480-rw',
    name: 'Amazing Parking Simulator Game',
    date: 'Jul 21, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.Parking.Simulation&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/DM65_E3kQUxf0cyzScQ29VpzY23AegGvKWSQ2m8Cc24cm-L8NKPiq_7G0oNPGF5cAg=w240-h480-rw',
    name: 'Parking Jam 3d: Parking Games',
    date: 'Sep 30, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.Rivalwheels.ParkingSimulation.Master&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/fA0hkMl8Pv_-CtiwTtLHOd7BoUq2ZhqjCUL5XySISh5nHhLPEa-TVOYYFjxV5XpXASU=w240-h480-rw',
    name: 'Bus Simulator : Indonesia City',
    date: 'Mar 16, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.rivalwheels.bussimulator2021&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/sjFZiNfRPm8nDd_T9_PdbGBMjcb_54IAgL0PNfjAeMDEVuhPz0YM6fCLcmYvArWTBEg=w240-h480-rw',
    name: 'Flag Runner 3d - World Quiz',
    date: 'Dec 8, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.fungamesstudio.what.is&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/l5tLi_O9blMRigLjwD8dRbd1pNu4BR-t-JaNS4P_y6BBBpw-fcksx8UhemArHPQteok=w240-h480-rw',
    name: 'Pull the Pin - Pin Puzzle',
    date: 'Aug 17, 2022',
    link: 'https://play.google.com/store/apps/details?id=com.fungamesstudio.pull.the.pin&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/y6XjnNPUyPOqyiqdqSUpvHVnRdmeqkWOKNHYsnVffC43aNWjFdfZVrGKBCE9THZMJPK6=w240-h480-rw',
    name: 'Arrow Fest: Stickman Archer',
    date: 'Oct 8, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.fungamesstudio.arrow.fest.battle&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/QQZWS9RTh6LGkWBdqk8dBaT3Zlm3GuZuE05XQSRrcNSZuuiqeX_pfaULJkVGxYnvpDPg=w240-h480-rw',
    name: 'Catch Birds Eggs',
    date: 'Oct 23, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.FunGamesStudio.lucky.eggs&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/GcQZCqi4gRwLvalcGt6WwZbvf76mx28F5IXfOhLvu3F2RgQR3x5TlPN2efiSdxJOPkc=w240-h480-rw',
    name: 'Fidget Trading Toys - Pop It',
    date: 'Sep 23, 2021',
    link: 'https://play.google.com/store/apps/details?id=com.fungamesstudio.fidget.trading.master&pcampaignid=web_share',
    platform: 'Unity',
  },
  {
    image:
      'https://play-lh.googleusercontent.com/xPxFBk_4VUkqE0XHCSHdbbOgVhPzE7asuwnoENVubqtHBLy2v9wM6CQYqQdqzGE8rhs=w240-h480-rw',
    name: 'Junkyard Keeper: Garbage truck',
    date: 'Aug 17, 2022',
    link: 'https://play.google.com/store/apps/details?id=com.fungamesstudio.crane.picker&pcampaignid=web_share',
    platform: 'Unity',
  },
]

export { GamesData }
