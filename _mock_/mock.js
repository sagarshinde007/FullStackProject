//////////// Country List
var countriesList = [
  {
    countryname: '---Select---',
    id: '',
  },
  {
    countryname: 'India',
    id: 'IN',
  },
  {
    countryname: 'United States',
    id: 'USA',
  },
];
/////////////// State List
var stateLists = [
  {
    statename: '---Select---',
    stateid: '',
    countryid: '',
  },
  {
    statename: 'Maharashtra',
    stateid: 'IN1',
    countryid: 'IN',
  },
  {
    statename: 'Karnataka',
    stateid: 'IN2',
    countryid: 'IN',
  },
  {
    statename: 'Texas',
    stateid: 'USA1',
    countryid: 'USA',
  },
  {
    statename: 'Atlanta',
    stateid: 'USA2',
    countryid: 'USA',
  },
];
/////////////////// City List
var cityLists = [
  {
    cityName: '---Select---',
    cityid: '',
    countryid: '',
    stateID: '',
  },
  {
    cityName: 'Pune',
    cityid: 'MH2',
    countryid: 'IN',
    stateID: 'IN1',
  },
  {
    cityName: 'Mumbai',
    cityid: 'MH1',
    countryid: 'IN',
    stateID: 'IN1',
  },
  {
    cityName: 'Bangalore',
    cityid: 'KA1',
    countryid: 'IN',
    stateID: 'IN2',
  },
  {
    cityName: 'Belgavi',
    cityid: 'KA2',
    countryid: 'IN',
    stateID: 'IN2',
  },
  {
    cityName: 'Hostan',
    cityid: 'TX1',
    countryid: 'USA',
    stateID: 'USA1',
  },
  {
    cityName: 'Dalas',
    cityid: 'TX2',
    countryid: 'USA',
    stateID: 'USA1',
  },
  {
    cityName: 'Norcross',
    cityid: 'AT1',
    countryid: 'USA',
    stateID: 'USA2',
  },
  {
    cityName: 'Duluth',
    cityid: 'AT2',
    countryid: 'USA',
    stateID: 'USA2',
  },
];

//// Card data
var cardData = [
  {
    card_title: 'Depression Counselling',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'images/CounsellingImages/Depression.jpg',
  },
  {
    card_title: 'Anxiety Counselling',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'images/CounsellingImages/Anxiety.jpg',
  },
  {
    card_title: 'Child Counselling',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'images/CounsellingImages/Childcounselling.jpg',
  },
  {
    card_title: 'Family Counselling',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'images/CounsellingImages/FamilyCounselling.jpg',
  },
  {
    card_title: 'Marriage Counselling',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'images/CounsellingImages/MarriageCounselling.jpg',
  },
  {
    card_title: 'Relationship Counselling',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'images/CounsellingImages/RelationshipCounselling.jpg',
  },
];

/////Testimonials Data

var testiMonialsData = [
  {
    card_title: 'Somya Singh',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'somya.jpg',
    counselling_services: 'Child counselling',
    Rating: 5,
  },
  {
    card_title: 'Mayank Singh',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'mayank.jpg',
    counselling_services: 'Depression counselling',
    Rating: 4,
  },
  {
    card_title: 'Simmy Tomer',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'Simmi.jpg',
    counselling_services: 'Relationship counselling',
    Rating: 5,
  },
  {
    card_title: 'Somya Singh',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'somya.jpg',
    counselling_services: 'Child counselling',
    Rating: 5,
  },
  {
    card_title: 'Mayank Singh',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'mayank.jpg',
    counselling_services: 'Depression counselling',
    Rating: 4,
  },
  {
    card_title: 'Simmy Tomer',
    card_desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam praesentium ab velit dolorum vel qui corrupti  molestiae delectus perspiciatis quidem!',
    card_image: 'Simmi.jpg',
    counselling_services: 'Relationship counselling',
    Rating: 5,
  },
];
