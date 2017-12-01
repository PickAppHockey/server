

exports.up = function(knex, Promise) {
      return knex("Rinks").insert(
        [ {
            id: '208866d0-d674-11e7-a933-b75cf7cf01ee',
            name: 'Christie Pits Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.6653688,
            longitute: -79.42219879999999,
            hasNets: true },
          {
            id: '20888de0-d674-11e7-a933-b75cf7cf01ee',
            name: 'Westway Outdoor Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.68845659999999,
            longitute: -79.5422107,
            hasNets: true },
          {
            id: '20888de1-d674-11e7-a933-b75cf7cf01ee',
            name: 'Summerlea Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.726876,
            longitute: -79.5521052,
            hasNets: true },
          {
            id: '20888de2-d674-11e7-a933-b75cf7cf01ee',
            name: 'Harry Gairey Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.65114430000001,
            longitute: -79.4049524,
            hasNets: true },
          {
            id: '20888de3-d674-11e7-a933-b75cf7cf01ee',
            name: 'Lambton Kingsway Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.658294,
            longitute: -79.509388,
            hasNets: true },
          {
            id: '20888de4-d674-11e7-a933-b75cf7cf01ee',
            name: 'Royalcrest Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.75186229999999,
            longitute: -79.6045223,
            hasNets: true },
          {
            id: '20888de5-d674-11e7-a933-b75cf7cf01ee',
            name: 'Monarch Park Ice Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.67709079999999,
            longitute: -79.3255633,
            hasNets: true },
          {
            id: '20888de6-d674-11e7-a933-b75cf7cf01ee',
            name: 'Trinity Bellwoods Hockey Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.649273,
            longitute: -79.413431,
            hasNets: true },
          {
            id: '20888de7-d674-11e7-a933-b75cf7cf01ee',
            name: 'Otter Creek Centre',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.7214157,
            longitute: -79.40975019999999,
            hasNets: true },
          {
            id: '20888de8-d674-11e7-a933-b75cf7cf01ee',
            name: 'West Mall Outdoor Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.6416035,
            longitute: -79.5662177,
            hasNets: true },
          {
            id: '20888de9-d674-11e7-a933-b75cf7cf01ee',
            name: 'Wedgewood Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.6451255,
            longitute: -79.54794009999999,
            hasNets: true },
          {
            id: '20888dea-d674-11e7-a933-b75cf7cf01ee',
            name: 'Irving W Chapley Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.7611295,
            longitute: -79.45570959999999,
            hasNets: true },
          {
            id: '20888deb-d674-11e7-a933-b75cf7cf01ee',
            name: 'Rennie Park Ice Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.6444474,
            longitute: -79.4733172,
            hasNets: true },
          {
            id: '20888dec-d674-11e7-a933-b75cf7cf01ee',
            name: 'Westgrove Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.68277509999999,
            longitute: -79.56922469999999,
            hasNets: true },
          {
            id: '20888ded-d674-11e7-a933-b75cf7cf01ee',
            name: 'Prince of Wales Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.5989037,
            longitute: -79.4993272,
            hasNets: true },
          {
            id: '20888dee-d674-11e7-a933-b75cf7cf01ee',
            name: 'Harbourfront Centre Natrel Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.6388697,
            longitute: -79.3829895,
            hasNets: true },
          {
            id: '20888def-d674-11e7-a933-b75cf7cf01ee',
            name: 'Giovanni Caboto Outdoor Pool',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.67563759999999,
            longitute: -79.451638,
            hasNets: true },
          {
            id: '20888df0-d674-11e7-a933-b75cf7cf01ee',
            name: 'Wallace Emerson Rink Arena',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.66733669999999,
            longitute: -79.4393231,
            hasNets: true },
          {
            id: '20888df1-d674-11e7-a933-b75cf7cf01ee',
            name: 'Campbell Park Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.6631599,
            longitute: -79.4480109,
            hasNets: true },
          {
            id: '20888df2-d674-11e7-a933-b75cf7cf01ee',
            name: 'Sunnydale Acres Rink',
            playerCapacity: 20,
            iceCondition: 'good',
            latitude: 43.7244623,
            longitute: -79.577928,
            hasNets: true } ]
    );

  };


  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Rinks')
  };



//   [ {
//     id: '208866d0-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Christie Pits Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.6653688,
//     longitute: -79.42219879999999,
//     hasNets: true },
//   {
//     id: '20888de0-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Westway Outdoor Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.68845659999999,
//     longitute: -79.5422107,
//     hasNets: true },
//   {
//     id: '20888de1-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Summerlea Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.726876,
//     longitute: -79.5521052,
//     hasNets: true },
//   {
//     id: '20888de2-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Harry Gairey Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.65114430000001,
//     longitute: -79.4049524,
//     hasNets: true },
//   {
//     id: '20888de3-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Lambton Kingsway Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.658294,
//     longitute: -79.509388,
//     hasNets: true },
//   {
//     id: '20888de4-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Royalcrest Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.75186229999999,
//     longitute: -79.6045223,
//     hasNets: true },
//   {
//     id: '20888de5-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Monarch Park Ice Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.67709079999999,
//     longitute: -79.3255633,
//     hasNets: true },
//   {
//     id: '20888de6-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Trinity Bellwoods Hockey Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.649273,
//     longitute: -79.413431,
//     hasNets: true },
//   {
//     id: '20888de7-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Otter Creek Centre',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.7214157,
//     longitute: -79.40975019999999,
//     hasNets: true },
//   {
//     id: '20888de8-d674-11e7-a933-b75cf7cf01ee',
//     name: 'West Mall Outdoor Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.6416035,
//     longitute: -79.5662177,
//     hasNets: true },
//   {
//     id: '20888de9-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Wedgewood Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.6451255,
//     longitute: -79.54794009999999,
//     hasNets: true },
//   {
//     id: '20888dea-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Irving W Chapley Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.7611295,
//     longitute: -79.45570959999999,
//     hasNets: true },
//   {
//     id: '20888deb-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Rennie Park Ice Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.6444474,
//     longitute: -79.4733172,
//     hasNets: true },
//   {
//     id: '20888dec-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Westgrove Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.68277509999999,
//     longitute: -79.56922469999999,
//     hasNets: true },
//   {
//     id: '20888ded-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Prince of Wales Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.5989037,
//     longitute: -79.4993272,
//     hasNets: true },
//   {
//     id: '20888dee-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Harbourfront Centre Natrel Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.6388697,
//     longitute: -79.3829895,
//     hasNets: true },
//   {
//     id: '20888def-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Giovanni Caboto Outdoor Pool',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.67563759999999,
//     longitute: -79.451638,
//     hasNets: true },
//   {
//     id: '20888df0-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Wallace Emerson Rink Arena',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.66733669999999,
//     longitute: -79.4393231,
//     hasNets: true },
//   {
//     id: '20888df1-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Campbell Park Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.6631599,
//     longitute: -79.4480109,
//     hasNets: true },
//   {
//     id: '20888df2-d674-11e7-a933-b75cf7cf01ee',
//     name: 'Sunnydale Acres Rink',
//     playerCapacity: 20,
//     iceCondition: 'good',
//     latitude: 43.7244623,
//     longitute: -79.577928,
//     hasNets: true } ]





























  