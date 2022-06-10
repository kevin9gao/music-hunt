'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
      {
        email: 'mr.demo@demolition.com',
        username: 'Mr. Demo',
        full_name: 'Demo Demolition',
        biography: 'I am a demolitionist',
        profilePic: 'https://static01.nyt.com/images/2020/03/08/magazine/08Mag-Tip-01/08Mag-Tip-01-mediumSquareAt3X.jpg',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mista.demo@demolition.com',
        username: 'Mr. Demo2',
        full_name: 'Demo Demolition2',
        biography: 'I am a demo man',
        profilePic: 'https://www.fbi.gov/image-repository/decades-old-military-ordnances.jpg/@@images/image/high',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'mi@demo.com',
        username: 'Mr. Demo3',
        full_name: 'Demo Demolitioner',
        biography: 'I am a demolitioner',
        profilePic: 'https://img.favpng.com/1/6/20/cartoon-person-illustration-png-favpng-mrhesMTZHc3QDPAZXgJZfMx9T.jpg',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'dIssac@gmail.com',
        username: 'iDiaz',
        full_name: 'Issac Diaz',
        biography: 'I am Issac Diaz',
        profilePic: 'https://cam.mbi.ufl.edu/wordpress/files/2021/11/no-headshot-processed-processed.png',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'kgao@outlook.com',
        username: 'kevkev',
        full_name: 'Kevin Gao',
        biography: 'I am Kevin Gao',
        profilePic: 'https://cam.mbi.ufl.edu/wordpress/files/2021/11/no-headshot-processed-processed.png',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Wang.Edward@hotmail.com',
        username: 'Edword',
        full_name: 'Edward Wang',
        biography: 'I am Xiangyou Edward Wang',
        profilePic: 'https://cam.mbi.ufl.edu/wordpress/files/2021/11/no-headshot-processed-processed.png',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Jokim@yahoo.com',
        username: 'KimJo',
        full_name: 'Jonathan Kim',
        biography: 'I am Jonathan Kim',
        profilePic: 'https://cam.mbi.ufl.edu/wordpress/files/2021/11/no-headshot-processed-processed.png',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Ninecix@gmail.com',
        username: 'Ninexcix',
        full_name: 'Job Woo',
        biography: 'Job Woo, also known as NINEXCIX or referred to as NINE, is a Korean-American human from Maryland. Wanting to give back what music has done for him, he uses sonics as his canvas.',
        profilePic: 'https://pbs.twimg.com/profile_images/1430570929172717572/zEN_J2j4_400x400.jpg',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Tpain@gmail.com',
        username: 'T-pain',
        full_name: 'Faheem Rashad Najm',
        biography: 'Faheem Rasheed Najm, better known by his stage name T-Pain, is an American rapper, singer, songwriter and record producer. Throughout his career as a singer, T-Pain popularized the creative use of the Auto-Tune pitch correction effect, used with extreme parameter settings to create distinctive vocal sounds.',
        profilePic: 'https://www2.pictures.zimbio.com/gi/T+Pain+8-J65g_Z5Fsm.jpg',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Queen@gmail.com',
        username: 'Queen',
        full_name: 'Freddie Mercury',
        biography: 'Freddie Mercury was a British singer and songwriter, who achieved worldwide fame as the lead vocalist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he was known for his flamboyant stage persona and four-octave vocal range.',
        profilePic: 'https://lyricstranslate.com/files/styles/artist/public/freddie-mercury_sacha-baron-cohen.jpg',
        hashedPassword: 'example-pasword',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Users', null, {});
  }
};
