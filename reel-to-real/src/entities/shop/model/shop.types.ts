export type Shop = {
  naming: string,
  address: string,
  metro: {
    color: 'purple' | 'orange' | 'red',
    line: string
  },
  workingHours: {
    from: string,
    to: string,
    days: string
  }
}