/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusiness = `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
    id
    name
    description
    phoneNumber
    whatsappNumber
    webpage
    address
    location {
      lat
      lon
    }
  }
}
`;
export const listBusinesss = `query ListBusinesss(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      phoneNumber
      whatsappNumber
      webpage
      address
      location {
        lat
        lon
      }
    }
    nextToken
  }
}
`;
export const searchBusinesss = `query SearchBusinesss(
  $filter: SearchableBusinessFilterInput
  $sort: SearchableBusinessSortInput
  $limit: Int
  $nextToken: String
) {
  searchBusinesss(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      phoneNumber
      whatsappNumber
      webpage
      address
      location {
        lat
        lon
      }
    }
    nextToken
    total
  }
}
`;
