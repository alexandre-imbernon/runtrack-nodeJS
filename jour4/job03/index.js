const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'LaPlateforme';
const studentsData = [
    { lastname: 'LeBricoleur', firstname: 'Bob', students_number: '123456', year_id: null },
    { lastname: 'Doe', firstname: 'John', students_number: '789012', year_id: null },
    { lastname: 'Dupont', firstname: 'Marine', students_number: '345678', year_id: null }
];

async function connectToDatabase() {
    try {
        console.log('Tentative de connexion à MongoDB...');
        
        const client = new MongoClient(url);
        await client.connect();

        console.log('Connecté à MongoDB avec succès !');

        const db = client.db(dbName);

        const result = await db.collection('student').insertMany(studentsData);
        console.log(`${result.insertedCount} étudiants insérés`);

        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

connectToDatabase();
