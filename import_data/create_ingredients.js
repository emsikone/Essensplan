import fs from 'fs/promises';
import PocketBase from 'pocketbase';

(async () => {
    console.log('Starte PocketBase-Skript...');
    const pb = new PocketBase('http://192.168.1.25:8080');

    async function createIngredients() {
        try {
            console.log('Beginne Authentifizierung...');
            //const authData = await pb.admins.authWithPassword(
            // console.log('pb =', pb);
            // const authData = await pb.collection("_superusers").authWithPassword(
            //     'joern@emsikone.de',
            //     '1998JDQ7X5cn'
            // );

            // const userData = await pb.collection('users').authWithPassword( 'test@test.de',
            //     '1234567890');

            // console.log('Authentifizierung erfolgreich:', pb.authStore.isValid);
            // console.log('Token:', pb.authStore.token);

            console.log('Lese ingredients.json...');
            const data = await fs.readFile('./realistic_ingredients.json', 'utf-8');
            console.log('Datei erfolgreich geladen, parse JSON...');
            const ingredients = JSON.parse(data);
            console.log(`JSON erfolgreich geparst. Anzahl der Zutaten: ${ingredients.length}`);

            console.log('Beginne mit dem Hinzufügen der Zutaten...');
            for (const [index, ingredient] of ingredients.entries()) {
                try {
                    console.log(`Erstelle Zutat ${index + 1}/${ingredients.length}: ${ingredient.name}`);
                    const response = await pb.collection('ingredients').create(ingredient);
                    console.log(`Zutat erfolgreich erstellt:`, response);
                } catch (error) {
                    console.error(
                        `Fehler beim Erstellen der Zutat "${ingredient.name}" (Index ${index}):`,
                        error.message
                    );
                }
            }

            console.log('Alle Zutaten wurden erfolgreich verarbeitet!');
        } catch (error) {
            console.error('Fehler bei der Authentifizierung oder Verarbeitung:', error.message);
        }
    }

    console.log('Starte Funktion createIngredients...');
    await createIngredients();
    console.log('Funktion createIngredients abgeschlossen.');
})();
