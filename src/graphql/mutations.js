/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = `mutation CreateBusiness(
  $input: CreateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = `mutation UpdateBusiness(
  $input: UpdateBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = `mutation DeleteBusiness(
  $input: DeleteBusinessInput!
  $condition: ModelBusinessConditionInput
) {
  deleteBusiness(input: $input, condition: $condition) {
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
