import { COMPANY_INFO_NAME_CHANGE, COMPANY_INFO_EMAIL_CHANGE, COMPANY_INFO_DESCRIPTION_CHANGE, CONCERT_NAME_CHANGE, ARTIST_NAME_CHANGE, CONCERT_START_DATE_CHANGE, CONCERT_END_DATE_CHANGE, TICKETING_START_DATE_CHANGE, VIDEO_CHANGE, ZIPCODE_CHANGE, ADDRESS_CHANGE, DETAIL_ADDRESS_CHANGE, HEADER_IMAGE_CHANGE, POSTER_IMAGE_CHANGE, INFOMATION_CHANGE, ADD_TICKET, EDIT_TICKET } from "../actions/actionTypes";

export const companyNameChange = (companyName) => {
  return {
    type: COMPANY_INFO_NAME_CHANGE,
    payload: companyName
  }
}

export const companyEmailChange = (companyEmail) => {
  return {
    type: COMPANY_INFO_EMAIL_CHANGE,
    payload: companyEmail
  }
}

export const companyDescriptionChange = (companyDescription) => {
  return {
    type: COMPANY_INFO_DESCRIPTION_CHANGE,
    payload: companyDescription
  }
}

export const concertNameChange = (concertName) => {
  return {
    type: CONCERT_NAME_CHANGE,
    payload: concertName
  }
}

export const artistNameChange = (artistName) => {
  return {
    type: ARTIST_NAME_CHANGE,
    payload: artistName
  }
}

export const concertStartDateChange = (concertStartDate) => {
  return {
    type: CONCERT_START_DATE_CHANGE,
    payload: concertStartDate
  }
}

export const concertEndDateChange = (concertEndDate) => {
  return {
    type: CONCERT_END_DATE_CHANGE,
    payload: concertEndDate
  }
}

export const ticketingStartDateChange = (ticketingStartDate) => {
  return {
    type: TICKETING_START_DATE_CHANGE,
    payload: ticketingStartDate
  }
}

export const videoChange = (video) => {
  return {
    type: VIDEO_CHANGE,
    payload: video
  }
}

export const zipcodeChange = (zipcode) => {
  return {
    type: ZIPCODE_CHANGE,
    payload: zipcode
  }
}

export const addressChange = (address) => {
  return {
    type: ADDRESS_CHANGE,
    payload: address
  }
}

export const detailAddressChange = (detailAddress) => {
  return {
    type: DETAIL_ADDRESS_CHANGE,
    payload: detailAddress
  }
}

export const headerImageChange = (headerImage) => {
  return {
    type: HEADER_IMAGE_CHANGE,
    payload: headerImage
  }
}

export const posterImageChange = (posterImage) => {
  return {
    type: POSTER_IMAGE_CHANGE,
    payload: posterImage
  }
}

export const infomationChange = (infomation) => {
  return {
    type: INFOMATION_CHANGE,
    payload: infomation
  }
}