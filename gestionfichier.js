const fs = require('fs');

if (fs.existsSync("./monDossier")){
    if (fs.existsSync("monDossier/fichier.txt")){
        fs.unlink("monDossier/fichier.txt", (Error)=>{
            if (Error){
                console.error(Error);
            }else{
                console.log("fichier supprimer");
            }
        })}
    fs.rmdir("./monDossier", (Error)=>{
        if (Error){
            console.error(Error);
        }else{
            console.log("dossier supprimer");
        }
    })
} else {
    fs.mkdir("./monDossier", (Error)=>{
        if(Error){
            console.error(Error);
        }else{
            console.log("dossier créer");
        }
    })
    fs.writeFile("monDossier/fichier.txt", "c'est du node", (Error)=>{
            if(Error){
                console.error(Error);
            }else{
                console.log("fichier créer");
            }
        })
}

// const fs = require('fs').promises;
// const path = require('path');

// const filePath = path.join(__dirname, 'monDossier', 'monFichier.txt');
// const directoryPath = path.join(__dirname, 'monDossier');

// fs.access(filePath)
//   .then(() => fs.unlink(filePath))
//   .then(() => console.log('fichier supprimé'))
//   .catch(() => fs.writeFile(filePath, 'c\'est du node :)'))
//   .then(() => console.log('fichier créé'))
//   .then(() => fs.access(directoryPath))
//   .then(() => fs.rmdir(directoryPath))
//   .then(() => console.log('dossier supprimé'))
//   .catch(() => {
//     console.log('Le dossier n\'existe pas encore, il sera créé maintenant...');
//     return fs.mkdir(directoryPath);
//   })
//   .then(() => console.log('dossier créé'))
//   .catch((error) => console.error(error));