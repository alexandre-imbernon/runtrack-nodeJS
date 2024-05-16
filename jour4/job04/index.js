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

        // Récupérer les IDs des cursus à partir de la collection "year"
        const yearCollection = db.collection('year');
        const years = await yearCollection.find().toArray();

        // Mettre à jour chaque étudiant avec l'ID correspondant au cursus approprié
        const studentsCollection = db.collection('student');
        for (let i = 0; i < studentsData.length; i++) {
            studentsData[i].year_id = years[i % years.length]._id;
            await studentsCollection.updateOne(
                { students_number: studentsData[i].students_number },
                { $set: { year_id: studentsData[i].year_id } }
            );
        }

        console.log('Cursus ajoutés aux étudiants existants avec succès !');

        await client.close();
        console.log('Connexion fermée');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

connectToDatabase();
