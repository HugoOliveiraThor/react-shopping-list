export const Types = {
  START_UPDATE: 'START_UPDATE'
}

export const Creator = {
  startUpdate: product => ({
    type: Types.START_UPDATE,
    product
  })
}