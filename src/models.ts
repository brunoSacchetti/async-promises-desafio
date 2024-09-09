import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  async load() {
    // usar la version Async (readFile)
    //const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    
    /* try{
      const json = await jsonfile.readFile("src/contacts.json");
      this.data = json;
      console.log(this.data);
    } catch(e){
      console.log("Error al leer el archivo: " + e.message);
    } */

    const promise = jsonfile.readFile("src/contacts.json");
    promise.then((json) => {
      this.data = json;
    });
    return promise;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
    //jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
    try{
      jsonfile.writeFile("src/contacts.json", this.data);
    } catch(e){
      console.log("Erro al escribir el archivo: ", e.message);
    }
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
