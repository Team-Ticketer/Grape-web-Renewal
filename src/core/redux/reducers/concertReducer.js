import { COMPANY_INFO_NAME_CHANGE, COMPANY_INFO_EMAIL_CHANGE, COMPANY_INFO_DESCRIPTION_CHANGE, CONCERT_NAME_CHANGE, ARTIST_NAME_CHANGE, CONCERT_START_DATE_CHANGE, CONCERT_END_DATE_CHANGE, TICKETING_START_DATE_CHANGE, VIDEO_CHANGE, ZIPCODE_CHANGE, ADDRESS_CHANGE, DETAIL_ADDRESS_CHANGE, HEADER_IMAGE_CHANGE, POSTER_IMAGE_CHANGE, INFOMATION_CHANGE } from "../actions/actionTypes";

const initialState = {
  companyName: '',
  companyEmail: '',
  companyDescription: '',
  concertName: '',
  artistName: '',
  concertStartDate: new Date().getTime(),
  concertEndDate: new Date().getTime()+100000,
  ticketingStartDate: new Date().getTime(),
  video: '',
  address: '',
  headerImage: null,
  posterImage: null,
  infomation: '',
  tickets: [{
    name: '',

  }],
};

const concertReducer = (state=initialState, action) => {
  switch(action.type) {
    case COMPANY_INFO_NAME_CHANGE:
      return {
        ...state,
        companyName: action.payload
      };
    case COMPANY_INFO_EMAIL_CHANGE:
      return {
        ...state,
        companyEmail: action.payload
      };
    case COMPANY_INFO_DESCRIPTION_CHANGE:
      return {
        ...state,
        companyDescription: action.payload
      }
    case CONCERT_NAME_CHANGE:
      return {
        ...state,
        concertName: action.payload
      }
    case ARTIST_NAME_CHANGE:
      return {
        ...state,
        artistName: action.payload
      }
    case CONCERT_START_DATE_CHANGE:
      return {
        ...state,
        concertStartDate: action.payload
      }
    case CONCERT_END_DATE_CHANGE:
      return {
        ...state,
        concertEndDate: action.payload
      }
    case TICKETING_START_DATE_CHANGE:
      return {
        ...state,
        ticketingStartDate: action.payload
      }
    case VIDEO_CHANGE:
      return {
        ...state,
        video: action.payload
      }
    case ADDRESS_CHANGE:
      return {
        ...state,
        address: action.payload 
      }
    case HEADER_IMAGE_CHANGE:
      return {
        ...state,
        headerImage: action.payload
      }
    case POSTER_IMAGE_CHANGE:
      return {
        ...state,
        posterImage: action.payload
      }
    case INFOMATION_CHANGE:
      return {
        ...state,
        infomation: action.payload
      }
    default:
      return state;
  }
}

export default concertReducer;