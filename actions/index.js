let nextRequestId = 0

export const addRequest = (label, amount, address) => {
  return {
    type: 'NEW_REQUEST',
    id: nextRequestId++,
    label,
    amount,
    address
  }
}
