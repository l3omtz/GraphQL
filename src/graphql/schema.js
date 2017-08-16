//  query llanguafe 
export default `
     type Location {
          _id: String,
          location: String
     }

     type Query {
          getLocations: [Location]
     }

     schema {
          query: Query
     }

`;