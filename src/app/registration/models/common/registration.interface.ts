// This file sets out details of our details object
export interface RegDetails {
  customer: Customer[],
  appliance: Appliance[]
  total: Appliance[]
}

export interface Customer {
    title: Title[],
    firstName: string,
    lastName: string,
    line1: string,
    line2: string,
    town: string,
    postcode: string
    email: string,
    phone: number
}

export interface Appliance {
  type: Type[],
  dateOfpurchase: {
    day: string,
    month: string,
    year: string
  },
  price: Price[],
  modelNumber: string,
  serialNumber: string
}

export interface Title {
  id: number,
  value: string
}

export interface Type {
  id: string,
  value: string
}

export interface Price {
  id: number,
  value: string
}

export interface Config {
  title: Title[],
  appliances: Appliance[],
  prices: Price[]
}