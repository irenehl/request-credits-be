import 'dotenv/config';
import mongoose from 'mongoose';
import { Department, Municipality } from './models/geo.model';

// MongoDB Connection
const mongoDBConnection = process.env.MONGODB_URI!;
mongoose.connect(mongoDBConnection, { useNewUrlParser: true, useUnifiedTopology: true } as any);

// Department and Municipality data
const departmentsData = [
  {
    name: 'Ahuachapán',
    municipalities: [
      'Ahuachapán',
      'Apaneca',
      'Atiquizaya',
      'Concepción de Ataco',
      'El Refugio',
      'Guaymango',
      'Jujutla',
      'San Francisco Menéndez',
      'San Lorenzo',
      'San Pedro Puxtla',
      'Tacuba',
      'Turín',
    ],
  },
  {
    name: 'Cabañas',
    municipalities: [
      'Cinquera',
      'Dolores',
      'Guacotecti',
      'Ilobasco',
      'Jutiapa',
      'San Isidro',
      'Sensuntepeque',
      'Tejutepeque',
      'Victoria',
    ],
  },
  {
    name: 'Chalatenango',
    municipalities: [
      'Agua Caliente',
      'Arcatao',
      'Azacualpa',
      'Chalatenango',
      'Citalá',
      'Comalapa',
      'Concepción Quezaltepeque',
      'Dulce Nombre de María',
      'El Carrizal',
      'El Paraíso',
      'La Laguna',
      'La Palma',
      'La Reina',
      'Las Vueltas',
      'Nombre de Jesús',
      'Nueva Concepción',
      'Nueva Trinidad',
      'Ojos de Agua',
      'Potonico',
      'San Antonio de la Cruz',
      'San Antonio Los Ranchos',
      'San Fernando',
      'San Francisco Lempa',
      'San Francisco Morazán',
      'San Ignacio',
      'San Isidro Labrador',
      'San Luis del Carmen',
      'San Miguel de Mercedes',
      'San Rafael',
      'Santa Rita',
      'Tejutla',
    ],
  },
  {
    name: 'Cuscatlán',
    municipalities: [
      'Candelaria',
      'Cojutepeque',
      'El Carmen',
      'El Rosario',
      'Monte San Juan',
      'Oratorio de Concepción',
      'San Bartolomé Perulapía',
      'San Cristóbal',
      'San José Guayabal',
      'San Pedro Perulapán',
      'San Rafael Cedros',
      'San Ramón',
      'Santa Cruz Analquito',
      'Santa Cruz Michapa',
      'Suchitoto',
      'Tenancingo',
    ],
  },
  {
    name: 'La Libertad',
    municipalities: [
      'Antiguo Cuscatlán',
      'Chiltiupán',
      'Ciudad Arce',
      'Colón',
      'Comasagua',
      'Huizúcar',
      'Jayaque',
      'Jicalapa',
      'La Libertad',
      'Santa Tecla',
      'Nuevo Cuscatlán',
      'San Juan Opico',
      'Quezaltepeque',
      'Sacacoyo',
      'San José Villanueva',
      'San Matías',
      'San Pablo Tacachico',
      'Talnique',
      'Tamanique',
      'Teotepeque',
      'Tepecoyo',
      'Zaragoza',
    ],
  },
  {
    name: 'La Paz',
    municipalities: [
      'Cuyultitán',
      'El Rosario',
      'Jerusalén',
      'Mercedes La Ceiba',
      'Olocuilta',
      'Paraíso de Osorio',
      'San Antonio Masahuat',
      'San Emigdio',
      'San Francisco Chinameca',
      'San Juan Nonualco',
      'San Juan Talpa',
      'San Juan Tepezontes',
      'San Luis La Herradura',
      'San Luis Talpa',
      'San Miguel Tepezontes',
      'San Pedro Masahuat',
      'San Pedro Nonualco',
      'San Rafael Obrajuelo',
      'Santa María Ostuma',
      'Santiago Nonualco',
      'Tapalhuaca',
      'Zacatecoluca',
    ],
  },
  {
    name: 'La Unión',
    municipalities: [
      'Anamorós',
      'Bolívar',
      'Concepción de Oriente',
      'Conchagua',
      'El Carmen',
      'El Sauce',
      'Intipucá',
      'La Unión',
      'Lislique',
      'Meanguera del Golfo',
      'Nueva Esparta',
      'Pasaquina',
      'Polorós',
      'San Alejo',
      'San José',
      'Santa Rosa de Lima',
      'Yayantique',
      'Yucuaiquín',
    ],
  },
  {
    name: 'Morazán',
    municipalities: [
      'Arambala',
      'Cacaopera',
      'Chilanga',
      'Corinto',
      'Delicias de Concepción',
      'El Divisadero',
      'El Rosario',
      'Gualococti',
      'Guatajiagua',
      'Joateca',
      'Jocoaitique',
      'Jocoro',
      'Lolotiquillo',
      'Meanguera',
      'Osicala',
      'Perquín',
      'San Carlos',
      'San Fernando',
      'San Francisco Gotera',
      'San Isidro',
      'San Simón',
      'Sensembra',
      'Sociedad',
      'Torola',
      'Yamabal',
      'Yoloaiquín',
    ],
  },
  {
    name: 'San Miguel',
    municipalities: [
      'Carolina',
      'Chapeltique',
      'Chinameca',
      'Chirilagua',
      'Ciudad Barrios',
      'Comacarán',
      'El Tránsito',
      'Lolotique',
      'Moncagua',
      'Nueva Guadalupe',
      'Nuevo Edén de San Juan',
      'Quelepa',
      'San Antonio del Mosco',
      'San Gerardo',
      'San Jorge',
      'San Luis de la Reina',
      'San Miguel',
      'San Rafael Oriente',
      'Sesori',
      'Uluazapa',
    ],
  },
  {
    name: 'San Salvador',
    municipalities: [
      'Aguilares',
      'Apopa',
      'Ayutuxtepeque',
      'Cuscatancingo',
      'Delgado',
      'El Paisnal',
      'Guazapa',
      'Ilopango',
      'Mejicanos',
      'Nejapa',
      'Panchimalco',
      'Rosario de Mora',
      'San Marcos',
      'San Martín',
      'San Salvador',
      'Santiago Texacuangos',
      'Santo Tomás',
      'Soyapango',
      'Tonacatepeque',
    ],
  },
  {
    name: 'San Vicente',
    municipalities: [
      'Apastepeque',
      'Guadalupe',
      'San Cayetano Istepeque',
      'San Esteban Catarina',
      'San Ildefonso',
      'San Lorenzo',
      'San Sebastián',
      'San Vicente',
      'Santa Clara',
      'Santo Domingo',
      'Tecoluca',
      'Tepetitán',
      'Verapaz',
    ],
  },
  {
    name: 'Santa Ana',
    municipalities: [
      'Candelaria de la Frontera',
      'Chalchuapa',
      'Coatepeque',
      'El Congo',
      'El Porvenir',
      'Masahuat',
      'Metapán',
      'San Antonio Pajonal',
      'San Sebastián Salitrillo',
      'Santa Ana',
      'Santa Rosa Guachipilín',
      'Santiago de la Frontera',
      'Texistepeque',
    ],
  },
  {
    name: 'Sonsonate',
    municipalities: [
      'Acajutla',
      'Armenia',
      'Caluco',
      'Cuisnahuat',
      'Izalco',
      'Juayúa',
      'Nahuizalco',
      'Nahulingo',
      'Salcoatitán',
      'San Antonio del Monte',
      'San Julián',
      'Santa Catarina Masahuat',
      'Santa Isabel Ishuatán',
      'Santo Domingo de Guzmán',
      'Sonsonate',
      'Sonzacate',
    ],
  },
  {
    name: 'Usulután',
    municipalities: [
      'Alegría',
      'Berlín',
      'California',
      'Concepción Batres',
      'El Triunfo',
      'Ereguayquín',
      'Estanzuelas',
      'Jiquilisco',
      'Jucuapa',
      'Jucuarán',
      'Mercedes Umaña',
      'Nueva Granada',
      'Ozatlán',
      'Puerto El Triunfo',
      'San Agustín',
      'San Buenaventura',
      'San Dionisio',
      'San Francisco Javier',
      'Santa Elena',
      'Santa María',
      'Santiago de María',
      'Tecapán',
      'Usulután',
    ],
  },
];

// Function to seed data
const seedData = async () => {
  try {
    // Empty the collections
    await Department.deleteMany({});
    await Municipality.deleteMany({});

    for (const departmentData of departmentsData) {
      // Create and save department
      const department = new Department({ name: departmentData.name });
      await department.save();

      // Create and save associated municipalities
      for (const municipalityName of departmentData.municipalities) {
        const municipality = new Municipality({
          name: municipalityName,
          department: department._id,
        });
        await municipality.save();
      }
    }

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
  }
};

// Execute the seeding function
seedData();
