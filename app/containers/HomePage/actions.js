import {
  RATE_RECOMMENDATION,
  RATE_RECOMMENDATION_SUCCESS,
  RATE_RECOMMENDATION_ERROR,
  GET_RECOMMENDATIONS,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_ERROR,
} from './constants';

/**
 * Fetches recommendations given page num and amount
 *
 * @param  {number} page The page number of the carousel
 * @param  {number} amt The number of items per page
 *
 * @return {object}    An action object with a type of RATE_RECOMMENDATION
 */
export function rateRecommendation(id) {
  return {
    type: RATE_RECOMMENDATION,
    id,
  };
}

/**
 * Dispatched when recommendation rating was succesfull
 *
 * @param  {array} data The recommendations data
 *
 * @return {object}      An action object with a type of RATE_RECOMMENDATION_SUCCESS passing the data
 */
export function recommendationRated(data) {
  return {
    type: RATE_RECOMMENDATION_SUCCESS,
    data,
  };
}

/**
 * Dispatched when recommendation rating failed
 *
 * @param  {array} data The recommendations data
 *
 * @return {object}      An action object with a type of RATE_RECOMMENDATION_ERROR passing the data
 */
export function recommendationRatingError(data) {
  return {
    type: RATE_RECOMMENDATION_ERROR,
    data,
  };
}

/**
 * Fetches recommendations given page num and amount
 *
 * @param  {number} page The page number of the carousel
 * @param  {number} amt The number of items per page
 *
 * @return {object}    An action object with a type of GET_RECOMMENDATIONS
 */
export function fetchRecommendations(page, amt) {
  return {
    type: GET_RECOMMENDATIONS,
    page,
    amt,
  };
}

/**
 * Dispatched when recommendations are succesfully retrieved
 *
 * @param  {array} data The recommendations data
 *
 * @return {object}      An action object with a type of GET_RECOMMENDATIONS_SUCCESS passing the data
 */
export function recommendationsFetched(data) {
  return {
    type: GET_RECOMMENDATIONS_SUCCESS,
    data,
  };
}

/**
 * Dispatched when fetching recommendations fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of GET_RECOMMENDATIONS_ERROR passing the error
 */
export function recommendationsFetchingError(error) {
  return {
    type: GET_RECOMMENDATIONS_ERROR,
    data: error,
  };
}
