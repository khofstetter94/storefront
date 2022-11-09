export const setChosenCategory = (category) => {
  return {
    type: 'CHOSEN',
    payload: category,
  }
}
