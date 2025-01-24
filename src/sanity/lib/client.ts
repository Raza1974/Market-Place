import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:"sk7MIccL2gGb1O31rtQOfz5j9ApatXMZmicNbFMZkPw6FWjfzXB1Ko7H2hFTX4Sc0KJsVYmAEI5cCIIJMt3qyNzoRUyYBVOi9M9aZXldesPjcZL2Wy0Elej9W2ZO8JB3PpOyotFcOvOqdj4M8dMsHyD3c54RlwXZbP0FW3WrDSNE477YANdC" 
})
