const mongoose = require('mongoose');

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/LaPlateforme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à la base de données'))
    .catch(error => console.error('Erreur lors de la connexion à la base de données :', error));

// Définition du schéma
const studentSchema = new mongoose.Schema({
    id: Number,
    lastname: String,
    firstname: String,
    students_number: Number,
    year_id: Number
});

// Création du modèle
const Student = mongoose.model('Student', studentSchema);

// Création des étudiants
async function createStudents() {
    try {
        const students = [
            { id: 1, lastname: 'LeBricoleur', firstname: 'Bob', students_number: 1, year_id: 2024 },
            { id: 2, lastname: 'Doe', firstname: 'John', students_number: 2, year_id: 2024 },
            { id: 3, lastname: 'Dupont', firstname: 'Marine', students_number: 3, year_id: 2024 }
        ];

        const result = await Student.insertMany(students);
        console.log(`${result.length} documents were inserted into the collection`);
    } catch (error) {
        console.error('Erreur lors de la création des étudiants :', error);
    } finally {
        mongoose.disconnect();
    }
}

createStudents();