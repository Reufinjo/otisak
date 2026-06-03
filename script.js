document.addEventListener("DOMContentLoaded", () => {
    const forma = document.getElementById("kontaktForma");

    forma.addEventListener("submit", (e) => {
        // Sprečavamo standardno osvežavanje stranice prilikom slanja
        e.preventDefault(); 
        
        // Iskače prozor sa obaveštenjem
        alert("Hvala Vam! Vaš zahtjev za sito štampu je uspješno poslat. Javićemo Vam se u najkraćem roku.");
        
        // Resetujemo formu da bude ponovo prazna
        forma.reset();
    });
});