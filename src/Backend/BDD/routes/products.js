// routes/register.js
const express = require('express');
const bcrypt = require('bcrypt');
const Product = require('../../models/Products'); // Assurez-vous que ce chemin est correct

const router = express.Router();

// Route pour enregistrer un utilisateur
router.post('/products', async (req, res) => {
    const { } = req.body;

    try {

        // Créer un nouvel utilisateur à partir des données du formulaire
        const newProduct = new Product({
            
        );

        // Enregistrer l'utilisateur dans la base de données
        await newProduct.save();

        res.status(201).json({ message: 'Produit ajouté avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement :', error);
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement du produit.' });
    }
});

module.exports = router; // Exporter le routeur
